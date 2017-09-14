import { injectGlobal } from 'styled-components'

export const colors = {
  brandPrimary: '#ff5005',
}

const fonts = {
}

const breakpoints = {
  xs: 'max-width: 576px',
  sm: 'min-width: 576px',
  md: 'min-width: 768px',
  lg: 'min-width: 992px',
  xl: 'min-width: 1200px',
}

export const theme = {
  colors,
  fonts,
  breakpoints,
}

export default theme

// eslint-disable-next-line
injectGlobal`
  body {
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
    font-weight: 300;
  }
`
