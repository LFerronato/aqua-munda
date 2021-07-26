import { Box, Flex, Heading, Text, Image, useToast } from '@chakra-ui/react'

import data from '../content/tmp-data.json'

type IProps = { materia: string }
const SubjectContainer = ({ materia }: IProps) => {
  const dataFiltered = data.filter(i => i.materia === materia)
  const toast = useToast()
  return (
    // Title
    <Flex w="100%" flexDir="column" p="5">
      <Flex justifyContent="space-between" w="100%">
        <Heading color="green.800">{materia}</Heading>
        <Text
          fontStyle="oblique"
          cursor="pointer"
          onClick={() =>
            toast({
              title: `Em breve! 😉😉`,
              status: 'success',
              isClosable: true,
              position: 'top',
              duration: 3000,
            })
          }
        >
          Ver mais
        </Text>
      </Flex>
      <Box w="100%" h="1" bg="green.100" />

      <Flex w="98%" overflowX="auto" position="relative">
        {dataFiltered.map(i => (
          <Flex
            key={i.id}
            h="150px"
            w="250px"
            bg="white"
            borderRadius="xl"
            m="3"
            p="5"
            border="1px solid #eee"
            cursor="pointer"
            flexDir="column"
            onClick={() =>
              toast({
                title: `Em breve! 😉😉`,
                status: 'success',
                isClosable: true,
                position: 'top',
                duration: 3000,
              })
            }
          >
            <Box borderRadius="full" mb="3">
              <Image src={i.img_link} w="40px" h="40px" borderRadius="full" />
            </Box>
            <Heading size="small" color="gray.500" flexWrap="nowrap">
              {i.title}
            </Heading>
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
