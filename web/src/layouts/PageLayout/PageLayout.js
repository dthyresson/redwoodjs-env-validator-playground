import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/core'

const PageLayout = ({ children }) => {
  return (
    <Stack spacing={8}>
      {children}
      <Box p={8}>
        <Heading fontSize={24}>About</Heading>
        <Flex></Flex>
      </Box>
    </Stack>
  )
}

export default PageLayout
