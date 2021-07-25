import { Box, Flex, Heading, Text } from '@chakra-ui/react'

type IProps = { title: string }

const SubjectContainer = ({ title }: IProps) => {
  const dataTest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  return (
    // Title
    <Flex w="100%" flexDir="column" p="5">
      <Flex justifyContent="space-between" w="100%">
        <Heading color="green.800">{title}</Heading>
        <Text fontStyle="oblique">Ver mais</Text>
      </Flex>
      <Box w="100%" h="1" bg="green.100" />

      <Flex w="98%" overflowX="auto" position="relative">
        {dataTest.map(i => (
          <Flex
            key={i}
            h="32"
            w="190px"
            bg="white"
            borderRadius="xl"
            m="3"
            p="3"
            border="1px solid #eee"
            cursor="pointer"
          >
            <Heading>{i}</Heading>
            <Heading>...........</Heading>
          </Flex>
        ))}
        {/* <Box
          position="absolute"
          right={0}
          bgGradient="linear(to-r, #FFF0, #ccc1, #ccc5)"
          w="20px"
          h="100%"
        /> */}
      </Flex>
    </Flex>
  )
}

export default SubjectContainer
