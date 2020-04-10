import { gql } from 'apollo-server-express'

export default gql`
  union LoginResult = LoginResponse | Error

  type Query {
    AllUsers: [User]!
  }

  type Mutation {
    login(input: LoginInput!): LoginResult!
    signup(input: SignupInput!): LoginResult!
  }

  type LoginResponse {
    csrfToken: String!
    user: User!
  }

  type Error {
    message: String!
  }

  type User {
    id: ID!
    fullname: String!
    email: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  input SignupInput {
    email: String!
    password: String!
    fullname: String!
  }
`
