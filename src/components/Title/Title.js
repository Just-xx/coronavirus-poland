import React from 'react'
import "./Title.scss"
import { motion } from 'framer-motion'
import coronaContext from '../../contexts/coronaContext'

const variants = {
  hidden: {
    opacity: 0,
    y: "-10px"
  },
  visible: {
    opacity: 1,
    y: 0
  }
}

const Title = () => {

  const coronaData = React.useContext(coronaContext)

  return ((coronaData.confirmed > -1) && !coronaData.error) ? (
    <motion.div
      className="title"
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        ease: "easeOut",
        duration: 1
      }}
    >
      Obecny stan zachorowań na <span style={{ whiteSpace: "nowrap" }}>SARS-CoV-2</span>w Polsce
    </motion.div>
  ) : null
}

export default Title
