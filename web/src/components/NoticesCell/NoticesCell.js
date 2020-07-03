import { Box, Text } from '@chakra-ui/core'

export const QUERY = gql`
  query {
    notices {
      id
      message
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ notices }) => {
  return notices.map((notice) => (
    <Box key={notice.id}>
      <Text>{notice.message}</Text>
    </Box>
  ))
}
