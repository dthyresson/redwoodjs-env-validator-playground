import { Box, Text } from '@chakra-ui/core'

export const QUERY = gql`
  query {
    notice {
      id
      message
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ notice }) => {
  return (
    <Box key={notice.id}>
      <Text>{notice.message}</Text>
    </Box>
  )
}
