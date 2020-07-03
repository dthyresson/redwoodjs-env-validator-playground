import gql from 'graphql-tag'

export const schema = gql`
  type Notice {
    id: Int!
    message: String!
  }

  type Query {
    notices: [Notice!]!
  }

  input CreateNoticeInput {
    message: String!
  }

  input UpdateNoticeInput {
    message: String
  }
`
