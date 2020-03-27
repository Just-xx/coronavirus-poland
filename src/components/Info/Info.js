import React from 'react'
import './Info.scss'
import InfoTile from './InfoTile/InfoTile'
import coronaContext from '../../contexts/coronaContext'
import { motion } from 'framer-motion'

const motionStates = {
  hidden: {
    opacity: 0,
    y: "10px"
  },
  visible: {
    opacity: 1,
    y: 0
  }
}

const Info = () => {

  const coronaData = React.useContext(coronaContext)

  return (!coronaData.error && coronaData.lastUpdate) ? (
    <motion.div
      className="info-section"
      variants={motionStates}
      initial="hidden"
      animate="visible"
      transition={{ 
        duration: 1,
        ease: "easeOut",
        staggerChildren: 0.4,
        delayChildren: 0.9
      }}
    >
      <InfoTile count={coronaData.recovered} type="recovered" />
      <InfoTile count={coronaData.confirmed} type="confirmed" />
      <InfoTile count={coronaData.deaths} type="deaths" />
    </motion.div>
  ) : (coronaData.error ? "Wystąpił nieoczekiwany błąd" : null)
}

export default Info