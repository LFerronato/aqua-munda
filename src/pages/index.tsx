import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import SEO from '../components/SEO'

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
      <Flex m="4" w="40%">
        <Image src="/logo.svg" width="688px" height="332px" layout="fixed" />
      </Flex>

      <Flex
        bg="white"
        p="8"
        alignItems="center"
        justifyContent="start"
        flexDir="column"
        w="90%"
        borderRadius="2xl"
        position="relative"
      >
        <Heading size="lg" fontWeight="medium" color="gray.700">
          Educação Básica
        </Heading>
        <Flex>
          <Image src="/education.jpg" width="390px" height="431px" />
          <Flex flexDir="column" justifyContent="space-between" m="8">
            <Heading size="lg" fontWeight="light" color="gray.700">
              Promover a Educação Azul
            </Heading>
            <Text>
              Professores, compartilhem suas ideias sobre como introduzir o assunto da
              água em qualquer matéria e propagar boas informações com as crianças e
              adolecentes.
            </Text>
            <Text>Contribua com a mudança!</Text>

            <Link href="/dashboard">
              <Flex
                borderRadius="full"
                bg="#00D6C9"
                h="10"
                w="40%"
                alignItems="center"
                justifyContent="center"
                cursor="pointer"
              >
                <Text color="white" fontSize="xl">
                  Acessar a Plataforma
                </Text>
              </Flex>
            </Link>
          </Flex>
          <Image src="/children.png" width="275" height="228" layout="fixed" />
        </Flex>
        <Box position="absolute" right={10} bottom={10}></Box>
      </Flex>
    </Flex>
  )
}
