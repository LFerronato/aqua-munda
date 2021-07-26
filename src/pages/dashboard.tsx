import { Box, Flex, Text, useToast } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SEO from '../components/SEO'
import SubjectContainer from '../components/SubjectContainer'

import data from '../content/tmp-data.json'

export default function Home() {
  const uniqueMaterias = [...new Set(data.map(i => i.materia))]
  const toast = useToast()
  return (
    <Flex
      w="100vw"
      minH="100vh"
      bg="#F2FFFE"
      p="8"
      alignItems="center"
      justifyContent="start"
      flexDir="column"
    >
      <SEO title="Home" />
      <Flex m="4" width="90%" alignItems="center" justifyContent="space-between">
        <Box>
          <Box cursor="pointer">
            <Link href="/">
              <Image src="/logo-horizontal.svg" width="461" height="61" />
            </Link>
          </Box>
          <Text fontWeight="bold" color="gray.600">
            Ajude a mudar o mundo
          </Text>
        </Box>
        <Flex
          borderRadius="full"
          bg="#00D6C9"
          h="70%"
          w="30%"
          mb="auto"
          alignItems="center"
          justifyContent="center"
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
        {uniqueMaterias.map(m => (
          <SubjectContainer key={m} materia={m} />
        ))}
      </Flex>
    </Flex>
  )
}
