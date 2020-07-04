import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/core'
import NoticesCell from 'src/components/NoticesCell'
import WeatherCell from 'src/components/WeatherCell'

const HomePage = () => {
  return (
    <Stack align="center" justify="center" spacing={12} p={8}>
      <Heading>netlify-plugin-redwoodjs-env-validator Playground</Heading>

      <Flex align="center" justify="center" direction="column">
        <Text textAlign="center" bg="blue.50" p={8}>
          You should see some lorem ipsum text pulled from the database below.
        </Text>
        <Box mt={8}>
          <NoticesCell />
        </Box>
      </Flex>

      <Flex align="center" justify="center" direction="column">
        <Text textAlign="center" bg="red.50" p={8}>
          You should see a smiley emoji defined in EMOJI env.
        </Text>
        <Text mt={8} textAlign="center">
          {process.env['EMOJI']}
        </Text>
      </Flex>

      <Box>
        <Text textAlign="center" bg="green.50" p={8}>
          You should see the weather for Boston pulled from a service with
          API_TOKEN envs set and a DEFAULT_ZIP.
        </Text>
        <Box
          ml={[
            '5%', // base
            '15%', // 480px upwards
            '25%', // 768px upwards
            '30%', // 992px upwards
          ]}
          mr={[
            '5%', // base
            '15%', // 480px upwards
            '25%', // 768px upwards
            '30%', // 992px upwards
          ]}
          mt={8}
        >
          <WeatherCell zip={process.env['DEFAULT_ZIP']} />
        </Box>
      </Box>
    </Stack>
  )
}

export default HomePage
