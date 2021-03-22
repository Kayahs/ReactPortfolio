import { gql } from '@apollo/client'

export const LOGIN_MUTATION = gql`
  mutation loginMutation($input: LoginInput!) {
    login(input: $input) {
      error {
        code
        message
      }
      csrfToken
    }
  }
`

export const SEND_EMAIL_MUTATION = gql`
  mutation sendEmailMutation($input: EmailInput!) {
    sendEmail(input: $input) {
      message
    }
  }
`
