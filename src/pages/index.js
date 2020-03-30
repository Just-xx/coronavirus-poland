import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/Seo/Seo"
import Info from '../components/Info/Info'
import TwitterEmbed from '../components/TwitterEmbed/TwitterEmbed'
import { CoronaProvider } from '../contexts/coronaContext'
import LastUpdate from '../components/LastUpdate/LastUpdate'

const IndexPage = () => (
  <Layout>
    <SEO />
    <CoronaProvider>
        <Info />
        <LastUpdate />
      <TwitterEmbed />
    </CoronaProvider>
  </Layout>
)

export default IndexPage
