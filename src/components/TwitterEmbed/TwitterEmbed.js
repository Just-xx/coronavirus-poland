import React from "react"
import { TwitterTimelineEmbed } from 'react-twitter-embed'
import './TwitterEmbed.scss'
import { motion } from 'framer-motion'

const variants = {
  hidden: {
    y: "100vh"
  },
  visible: {
    y: 0
  }
}

const showBtnVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}

const TwitterEmbed = () => {

  const [visible, setVisible] = React.useState(false)

  return (
    <>
      <motion.button
        className="show-hide-btn"
        onClick={() => setVisible(true)}
        variants={showBtnVariants}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 1,
          delay: 2.5
        }}
      >
        Pokaż tweety MZ 
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
      </motion.button>
      <motion.div
        className="twitter-embed-container"
        variants={variants}
        initial="hidden"
        animate={visible ? "visible" : "hidden"}
        transition={{
          duration: 0.8,
          ease: "easeInOut"
        }}
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
        <button className="hide-btn show-hide-btn" onClick={() => setVisible(false)}>Powrót <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg></button>
      </motion.div>
    </>
  )
}

export default TwitterEmbed
