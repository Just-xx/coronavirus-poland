import React from 'react'
import "./Title.scss"
import { motion } from 'framer-motion'

const variants = {
  hidden: {
    opacity: 0,
    y: "-10px"
  },
  loaded: {
    opacity: 1,
    y: 0
  }
}

const Title = () => {

  return (
    <motion.div
      className="title"
      variants={variants}
      transition={{ ease: "easeOut", duration: 0.7 }}
    >
      Obecny stan zachorowań na <span style={{ whiteSpace: "nowrap" }}>COVID-19</span> w Polsce
    </motion.div>
  )
}

export default Title
