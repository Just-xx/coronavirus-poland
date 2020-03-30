import React from 'react'
import './Info.scss'
import InfoTile from './InfoTile/InfoTile'
import coronaContext from '../../contexts/coronaContext'
import { motion } from 'framer-motion'
import Title from './Title/Title'

const variants = {
  loaded: {
    transition: { staggerChildren: 0.4, delayChildren: 0.2 }
  }
}

const Info = () => {

  const coronaData = React.useContext(coronaContext)

  return (
    <motion.div
      className="info-container"
      initial="hidden"
      animate={coronaData.isFetched && coronaData.success ? "loaded" : "hidden"}
    >
      <Title />
      <motion.div
        className="info-section"
        variants={variants}
      >
        <InfoTile count={coronaData.recovered} type="recovered" />
        <InfoTile count={coronaData.confirmed} type="confirmed" />
        <InfoTile count={coronaData.deaths} type="deaths" />
      </motion.div>
    </motion.div>
  )
}

export default Info