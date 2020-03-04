import { gql } from 'apollo-server-express'

export default gql`
  type Query {
    AllUsers: [User]!
  }

  type User {
    id: ID!
    fullname: String!
    email: String!
  }
`
