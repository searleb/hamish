import { injectGlobal } from 'styled-components'

export const colors = {
  brandPrimary: '#ff5005',
}

const fonts = {
}

// Grid Styled default breakpoints:
// 40em, 52em, 64em
const mediaBp = {
  xs: '(max-width: 40em)',
  sm: '(min-width: 40em)',
  md: '(min-width: 52em)',
  lg: '(min-width: 64em)',
  xl: '(min-width: 1200px)',
}

export const theme = {
  colors,
  fonts,
  mediaBp,
}

export default theme

// eslint-disable-next-line
injectGlobal`
  body {
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
    font-weight: 300;
  }
`
