import { gql } from 'apollo-server-express'

export default gql`
  union LoginResult = LoginResponse | Error

  type Query {
    AllUsers: [User]!
  }

  type Mutation {
    login(input: LoginInput!): LoginResult!
  }

  type LoginResponse {
    csrfToken: String!
    user: User!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  type Error {
    message: String!
  }

  type User {
    id: ID!
    fullname: String!
    email: String!
  }
`
