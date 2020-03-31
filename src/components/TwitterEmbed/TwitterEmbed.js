import React from "react"
import { TwitterTimelineEmbed } from 'react-twitter-embed'
import './TwitterEmbed.scss'
import { useIntersection } from 'react-use'
import { motion } from 'framer-motion'


const variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: 'easeInOut'
    }
  }
}

const TwitterEmbed = () => {

  const sectionRef = React.useRef(null)
  const intersection = useIntersection(sectionRef, {
     root: null,
     rootMargin: "0px",
     threshold: 0.1
  })

  return (
    <div className="twitter-embed-container">
      <motion.div
        ref={sectionRef}
        variants={variants}
        initial="hidden"
        animate={(intersection && intersection.isIntersecting) ? "visible" : "hidden"}
        >
        <div>
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
        </div>
      </motion.div>
    </div>
  )
}

export default TwitterEmbed
