import { gql } from '@apollo/client'

export const ACTIVITIES = gql`
  query Activities {
    activities {
      id
      name
      description
    }
  }
`

export const CODERS = gql`
  query Coders {
    coders {
      id
      name
      description
      activities
    }
  }
`

export const ADD_CODER = gql`
  mutation AddCoderMutation($name: String!, $description: String!) {
    addCoder(name: $name, description: $description) {
      code
      success
      message
      coder {
        name
        description
      }
    }
  }
`
