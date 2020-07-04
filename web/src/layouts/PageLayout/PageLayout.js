import {
  Box,
  Code,
  Heading,
  Icon,
  Image,
  Link,
  Stack,
  Text,
} from '@chakra-ui/core'

const PageLayout = ({ children }) => {
  return (
    <Stack spacing={2}>
      <Box p={4} bg="gray.50" borderBottom="1px" borderColor="gray.100">
        <Stack>
          <Stack isInline align="baseline">
            <Image src="favicon.png" size="24px"></Image>{' '}
            <Heading color="gray.600">
              <Link
                href="https://docs.netlify.com/configure-builds/build-plugins/"
                isExternal
                color="gray.800"
                fontWeight="bold"
              >
                netlify-plugin-redwoodjs-env-validator
              </Link>{' '}
              Playground
            </Heading>
          </Stack>

          <Text mt={4}>
            This is a demo of a{' '}
            <Link
              href="https://docs.netlify.com/configure-builds/build-plugins/"
              isExternal
              color="teal.500"
              fontWeight="bold"
            >
              Netlify Build Plugin
              <Icon
                name="external-link"
                mx="2px"
                size="12px"
                verticalAlign="baseline"
              />
            </Link>{' '}
            called{' '}
            <Link
              href="https://github.com/dthyresson/netlify-plugin-redwoodjs-env-validator"
              isExternal
              color="teal.500"
              fontWeight="bold"
            >
              netlify-plugin-redwoodjs-env-validator
              <Icon
                name="external-link"
                mx="2px"
                size="12px"
                verticalAlign="baseline"
              />
            </Link>{' '}
            that helps validate{' '}
            <Link
              href="https://redwoodjs.com/"
              isExternal
              color="teal.500"
              fontWeight="bold"
            >
              RedwoodJS
              <Icon
                name="external-link"
                mx="2px"
                size="12px"
                verticalAlign="baseline"
              />
            </Link>{' '}
            <Link
              href="(https://redwoodjs.com/docs/environment-variables"
              isExternal
              color="teal.500"
              fontWeight="bold"
            >
              environment variables
              <Icon
                name="external-link"
                mx="2px"
                size="12px"
                verticalAlign="baseline"
              />
            </Link>{' '}
            when{' '}
            <Link
              href="https://docs.netlify.com/site-deploys/overview/"
              isExternal
              color="teal.500"
              fontWeight="bold"
            >
              deploying
              <Icon
                name="external-link"
                mx="2px"
                size="12px"
                verticalAlign="baseline"
              />
            </Link>{' '}
            to{' '}
            <Link
              href="https://www.netlify.com/"
              isExternal
              color="teal.500"
              fontWeight="bold"
            >
              Netlify
              <Icon
                name="external-link"
                mx="2px"
                size="12px"
                verticalAlign="baseline"
              />
            </Link>
            .
          </Text>
          <Text>
            It aims to check that the environment variables needed for a healthy
            running RedwoodJS app have been properly setup; and it helps to keep
            them in sync betwen the <Code>.env.defaults</Code> to{' '}
            <Code>redwood.toml</Code> and the deployment environment
            configuration.
          </Text>
          <Text>
            For more information, see the plugin{' '}
            <Link
              href="https://github.com/dthyresson/netlify-plugin-redwoodjs-env-validator"
              isExternal
              color="teal.500"
              fontWeight="bold"
            >
              README.md
              <Icon
                name="external-link"
                mx="2px"
                size="12px"
                verticalAlign="baseline"
              />
            </Link>
          </Text>
        </Stack>
      </Box>
      {children}
      <Stack
        p={8}
        spacing={8}
        align="center"
        isInline
        justify="center"
        bg="gray.50"
        borderTop="1px"
        borderColor="gray.100"
      >
        <Text>
          Made with{' '}
          <Link
            href="https://redwoodjs.com/"
            isExternal
            color="teal.500"
            fontWeight="bold"
          >
            RedwoodJS
            <Icon
              name="external-link"
              mx="2px"
              size="12px"
              verticalAlign="baseline"
            />
          </Link>
        </Text>
        <Text>
          Deployed on{' '}
          <Link
            href="https://www.netlify.com/"
            isExternal
            color="teal.500"
            fontWeight="bold"
          >
            Netlify
            <Icon
              name="external-link"
              mx="2px"
              size="12px"
              verticalAlign="baseline"
            />
          </Link>
        </Text>
      </Stack>
    </Stack>
  )
}

export default PageLayout
