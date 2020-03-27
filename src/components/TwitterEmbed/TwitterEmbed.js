import React from "react"
import { TwitterTimelineEmbed } from 'react-twitter-embed'
import './TwitterEmbed.scss'

const TwitterEmbed = () => {

  return (
    <>
      <div
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
      </div>
    </>
  )
}

export default TwitterEmbed
