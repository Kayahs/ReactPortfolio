import { onError } from '@apollo/client/link/error'
import { ApolloClient, InMemoryCache, ApolloLink, HttpLink, split } from '@apollo/client'
import { getMainDefinition } from '@apollo/client/utilities'
import { IS_LOGGED_IN } from 'gql'
import { WebSocketLink } from '@apollo/client/link/ws'
// import { SubscriptionClient } from 'subscriptions-transport-ws'

let apolloClient = null

const appCache = new InMemoryCache()

appCache.writeQuery({
  query: IS_LOGGED_IN,
  data: {
    isLoggedIn: !!localStorage.getItem('token')
  }
})

const setCSRFToken = (csrfToken) => {
  if (!csrfToken) {
    localStorage.removeItem('token')
  } else {
    localStorage.setItem('token', csrfToken)
  }
  appCache.writeQuery({
    query: IS_LOGGED_IN,
    data: {
      isLoggedIn: !!localStorage.getItem('token')
    }
  })
}

const authorizedFetch = (uri, options) => {
  // get the authentication token from local storage if it exists local storage
  const token = localStorage.getItem('token')

  // return the headers to the context so httpLink can read them
  const headers = {
    ...options.headers,
    Authorization: token ? `Bearer ${token}` : ''
  }

  return fetch(uri, {
    ...options,
    headers
  })
}

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) graphQLErrors.map(({ message }) => console.log(message))
})

const httpLink = new HttpLink({
  uri: 'http://localhost:8080/graphql',
  credentials: 'include',
  fetch: authorizedFetch
})

// const wsLink = new WebSocketLink({
//   uri: `ws://localhost:8080/graphql`,
//   options: {
//     reconnect: true
//   }
// })

// const link = split(
//   ({ query }) => {
//     const definition = getMainDefinition(query)
//     return definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
//   },
//   wsLink,
//   httpLink
// )

const authLink = new ApolloLink((operation, forward) => {
  const responses = forward(operation)

  return responses.filter((response) => {
    // Handle log in/sign up responses
    const data = response.data || {}
    const { csrfToken } = data.login || data.signup || {}
    if (csrfToken != null) {
      setCSRFToken(csrfToken)
      console.log('logged in')
      // apolloClient.queryManager.broadcastQueries()
    }
    if (data.logout) {
      setCSRFToken(null)
      console.log('logged out')
    }
    // Handle auth errors and filter them out of responses
    if (response.errors == null) {
      return true
    }
    const authError = response.errors.some((err) => err.extensions.code === 'UNAUTHENTICATED')
    if (authError) {
      console.log('unauthenticated')
      setCSRFToken(null)
      // apolloClient.queryManager.broadcastQueries()
    }
    return !authError
  })
})

apolloClient = new ApolloClient({
  link: ApolloLink.from([errorLink, authLink, httpLink]),
  cache: appCache
})

export default apolloClient
