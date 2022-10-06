import { gql } from '@apollo/client'

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
