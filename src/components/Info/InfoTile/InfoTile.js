import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import './InfoTile.scss'

const labelTexts = {
  'recovered': 'wyzdrowienia',
  'confirmed': 'zachorowania',
  'deaths': 'śmierci',
}

const variants = {
  hidden: {
    translateY: "10px",
    opacity: 0
  },
  loaded: {
    opacity: 1,
    translateY: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut'
    }
  }
}

const InfoTile = ({ type, count }) => {

  const labelText = labelTexts[type]

  return (
    <motion.div
      className={`info-tile ${type}`}
      variants={variants}
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