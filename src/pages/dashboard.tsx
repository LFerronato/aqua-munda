import { Box, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import SEO from '../components/SEO'
import SubjectContainer from '../components/SubjectContainer'

export default function Home() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      bg="#F2FFFE"
      p="8"
      alignItems="center"
      justifyContent="start"
      flexDir="column"
    >
      <SEO title="Home" />
      <Flex m="4" width="90%" alignItems="center" justifyContent="space-between">
        <Box>
          <Image src="/logo-horizontal.svg" width="461" height="61" />
          <Text fontWeight="bold">Ajude a mudar o mundo</Text>
        </Box>
        <Flex
          borderRadius="full"
          bg="#00D6C9"
          h="70%"
          w="30%"
          mb="auto"
          alignItems="center"
          justifyContent="center"
        >
          <Text fontSize="30" color="white">
            + Atividade
          </Text>
        </Flex>
      </Flex>

      <Flex
        p="8"
        alignItems="center"
        justifyContent="start"
        flexDir="column"
        w="90%"
        h="90%"
      >
        <SubjectContainer title="História" />
        <SubjectContainer title="Matemática" />
      </Flex>
    </Flex>
  )
}
