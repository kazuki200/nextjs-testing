import { FC } from 'react'

import React from 'react'
import Layout from '../components/Layout'
import { StateProvider } from '../context/StateProvider'
import ContextA from '../components/ContextA'
import ContextB from '../components/ContextB'

const ContextPage: FC = () => {
  return (
    <Layout title="Context">
      <p className="text-4xl">context page</p>
      <StateProvider>
        <ContextA />
        <ContextB />
      </StateProvider>
    </Layout>
  )
}

export default ContextPage
