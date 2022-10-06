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
