import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/Seo/Seo"
import Info from '../components/Info/Info'
import TwitterEmbed from '../components/TwitterEmbed/TwitterEmbed'
import { CoronaProvider } from '../contexts/coronaContext'
import LastUpdate from '../components/LastUpdate/LastUpdate'
import Title from '../components/Title/Title'
import InfoContainer from '../components/InfoConatiner/InfoContainer'

const IndexPage = () => (
  <Layout>
    <SEO />
    <CoronaProvider>
      <InfoContainer>
        <Title />
        <Info />
        <LastUpdate />
      </InfoContainer>
      <TwitterEmbed />
    </CoronaProvider>
  </Layout>
)

export default IndexPage
