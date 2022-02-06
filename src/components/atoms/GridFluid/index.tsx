import React from 'react'
import { Container } from './styles'

interface IGridFluidProps{
  gap?: number
  itemMinWidth?: number
}

export const GridFluid: React.FC<IGridFluidProps> = ({ children, ...props }) => ( 
  <Container {...props}>{ children }</Container>
)
