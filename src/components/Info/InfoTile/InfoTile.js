import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import './InfoTile.scss'

const labelTexts = {
  'recovered': 'wyzdrowienia',
  'confirmed': 'zachorowania',
  'deaths': 'śmierci',
}

const motionStates = {
  hidden: {
    translateY: "10px",
    opacity: 0
  },
  visible: {
    opacity: 1,
    translateY: 0
  }
}

const InfoTile = ({ type, count }) => {

  const labelText = labelTexts[type]

  

  return count !== -1 && (
    <motion.div
      key={type}
      className={`info-tile ${type}`}
      variants={motionStates}
      transition={{ duration: 0.9, ease: 'easeOut' }}
    >
      <div className="count">{count}</div>
      <div className="label">{labelText}</div>
    </motion.div>
  )
}

InfoTile.propTypes = {
  type: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired
}

export default InfoTile