import React from 'react'
import './LastUpdate.scss'
import CoronaContext from '../../contexts/coronaContext'

const LastUpdate = () => {

  const coronaData = React.useContext(CoronaContext)

  return (!coronaData.error && coronaData.lastUpdate) ? (
    <div className="last-update">
      ostatnia aktualizacja: {coronaData.lastUpdate}
    </div>
  ) : null

}

export default LastUpdate