import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/Seo/Seo"
import Info from '../components/Info/Info'
import TwitterEmbed from '../components/TwitterEmbed/TwitterEmbed'
import { CoronaProvider } from '../contexts/coronaContext'
import LastUpdate from '../components/LastUpdate/LastUpdate'
import Title from '../components/Title/Title'

const IndexPage = () => (
  <Layout>
    <SEO />
    <CoronaProvider>
      <Title />
      <Info />
      <LastUpdate />
      <TwitterEmbed />
    </CoronaProvider>
  </Layout>
)

export default IndexPage
