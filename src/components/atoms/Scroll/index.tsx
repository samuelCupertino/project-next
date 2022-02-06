import React from 'react'
import { Container } from './styles'

interface IScrollProps{
  flexDirection?: 'row' | 'column'
  padding?: number[]
  margin?: number[]
  gap?: number
  height?: number | string
}

export const Scroll: React.FC<IScrollProps> = ({ children, ...props }) => ( 
  <Container {...props}>
    { children }
  </Container>
)
