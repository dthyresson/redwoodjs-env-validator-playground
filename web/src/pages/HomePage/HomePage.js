import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/core'
import PageLayout from 'src/layouts/PageLayout'
import NoticesCell from 'src/components/NoticesCell'
import WeatherCell from 'src/components/WeatherCell'

const HomePage = () => {
  return (
    <PageLayout>
      <Stack align="center" justify="center" spacing={12} p={8}>
        <Heading>Validations</Heading>
        <Flex align="center" justify="center" direction="column">
          <Text
            textAlign="center"
            bg="blue.50"
            p={8}
            borderWidth="1px"
            borderColor="blue.100"
            rounded="lg"
            shadow="md"
          >
            You should see some lorem ipsum text pulled from the database below.
          </Text>
          <Box
            mt={8}
            bg="gray.50"
            p={4}
            borderWidth="1px"
            borderColor="gray.100"
            rounded="lg"
            shadow="md"
          >
            <NoticesCell />
          </Box>
        </Flex>

        <Flex align="center" justify="center" direction="column">
          <Text
            textAlign="center"
            bg="red.50"
            p={8}
            borderWidth="1px"
            borderColor="red.100"
            rounded="lg"
            shadow="md"
          >
            You should see a smiley emoji defined in EMOJI env.
          </Text>
          <Text
            mt={8}
            textAlign="center"
            borderWidth="1px"
            borderColor="gray.100"
            rounded="lg"
            shadow="md"
            p={12}
          >
            {process.env['EMOJI']}
          </Text>
        </Flex>

        <Box>
          <Text
            textAlign="center"
            bg="green.50"
            p={8}
            borderWidth="1px"
            borderColor="green.100"
            rounded="lg"
            shadow="md"
          >
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
    </PageLayout>
  )
}

export default HomePage
