import React from 'react'
import { ApolloProvider } from '@apollo/client'

import { MainRouter } from 'components'
import { apolloClient } from 'config'

const AppContainer = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <MainRouter />
    </ApolloProvider>
  )
}

export default AppContainer
