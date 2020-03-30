import React from "react"
import { TwitterTimelineEmbed } from 'react-twitter-embed'
import './TwitterEmbed.scss'
import { motion } from 'framer-motion'

const variants = {
  hidden: {
    opacity: 0,
    y: "10px"
  },
  visible: {
    opacity: 1,
    y: 0
  }
}

const TwitterEmbed = () => {

  return (
    <motion.div
      className="twitter-embed-container"
      >
      <div className="mz-title">Aktualności Ministerstwa Zdrowia</div>
      <div className="twitter-mz-embed">
        <TwitterTimelineEmbed
          className="twitter-mz"
          sourceType="profile"
          screenName="mz_gov_pl"
          autoHeight
          noFooter
          lang="pl"
          />
      </div>
    </motion.div>
  )
}

export default TwitterEmbed
