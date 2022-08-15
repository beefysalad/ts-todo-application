import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import type { StyleFunctionProps } from '@chakra-ui/styled-system';
import { mode } from '@chakra-ui/theme-tools';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme(config, {
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        color: mode('gray.800', 'whiteAlpha.900')(props),
        bg: mode('gray.50', 'gray.800')(props),
      },
    }),
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Inter', sans-serif`,
    mono: 'Menlo, monospace',
  },
  components: {
    Input: {
      variants: {
        filled: (props: StyleFunctionProps) => ({
          field: {
            borderRadius: 'md',
            _focus: {
              borderColor: 'teal.500',
            },
          },
        }),
      },
    },
  },
});

export default theme;
