import React, { useEffect, useState } from 'react'
import axios from 'axios'

const CoronaContext = React.createContext()

const CoronaProvider = ({ children }) => {
  
  const [coronaData, setCoronaData] = useState({
    recovered: -1,
    confirmed: -1,
    deaths: -1
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
    .then(data => setCoronaData(data.data.data.covid19Stats[0]))
    .catch(() => setCoronaData({ error: 'Wystąpił nieoczekiwany błąd :(' }))

  }, [])

  return (
    <CoronaContext.Provider value={coronaData}>
      {children}
    </CoronaContext.Provider>
  )
}


export {
  CoronaProvider
}

export default CoronaContext