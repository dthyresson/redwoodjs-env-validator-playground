import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/core'
import NoticesCell from 'src/components/NoticesCell'
import WeatherCell from 'src/components/WeatherCell'

const HomePage = () => {
  return (
    <Stack align="center" justify="center" p={8}>
      <Heading>netlify-plugin-redwoodjs-env-validator</Heading>

      <Flex align="center" justify="center">
        <Text textAlign="center" bg="pink.50" p={8}>
          You should see some lorem ipsum text pulled from the database below.
        </Text>
      </Flex>

      <NoticesCell />

      <Box p={8}>
        <Text textAlign="center" bg="pink.50" p={8}>
          You should see a smiley emoji defined in EMOJI env.
        </Text>
        <Text textAlign="center">{process.env['EMOJI']}</Text>
      </Box>

      <Box p={8} w="40%">
        <Text textAlign="center" bg="pink.50" p={8} m={8}>
          You should see the weather for Boston pulled from a service with
          API_TOKEN envs set and a DEFAULT_ZIP.
        </Text>
        <WeatherCell zip={process.env['DEFAULT_ZIP']} />
      </Box>
    </Stack>
  )
}

export default HomePage
