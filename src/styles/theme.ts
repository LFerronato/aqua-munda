import { extendTheme } from '@chakra-ui/react'

const styles = {
  global: {
    'input::-ms-reveal': {
      display: 'none',
    },
    'input::-ms-clear': {
      display: 'none',
    },
    '*::-webkit-scrollbar': {
      width: '4px',
      height: '4px',
    },
    '*::-webkit-scrollbar-thumb': {
      background: '#d5ffd5',
      borderRadius: '4px',
    },
  },
}

export const theme = extendTheme({ styles })
