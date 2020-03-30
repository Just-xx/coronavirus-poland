import React, { useEffect, useState } from 'react'
import axios from 'axios'

const coronaContext = React.createContext()

const CoronaProvider = ({ children }) => {
  
  const [coronaData, setCoronaData] = useState({
    recovered: -1,
    confirmed: -1,
    deaths: -1,
    isFetched: false,
    success: null,
    error: null,
    lastUpdate: null
  })

  useEffect(() => {

    axios.get("https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats", {
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
        "x-rapidapi-key": "a5fcc2e6b5msh2914c3cb0fb82bcp14faf7jsn5e708789b444"
      },
      params: {
        country: "Poland"
      }
    })
    .then(data => setCoronaData({
      isFetched: true,
      success: true,
      ...data.data.data.covid19Stats[0]
    }))
    .catch(e => setCoronaData({
      isFetched: true,
      success: false,
      error: e
    }))

  }, [])

  return (
    <coronaContext.Provider value={coronaData}>
      {children}
    </coronaContext.Provider>
  )
}


export {
  CoronaProvider
}

export default coronaContext