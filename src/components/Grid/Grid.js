import React from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'

const SPACING = 2

const Container = styled(Box).attrs({
  px: SPACING,
}) `
  max-width: 1140px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
`

const Row = props => (
  <Flex
    {...props}
    mx={-SPACING}
    wrap
    style={{
      height: '100%',
    }}
  />
)

const Column = props => (
  <Box
    {...props}
    px={SPACING}
    flex='1 1 auto'
  />
)

export { Container, Row, Column }
