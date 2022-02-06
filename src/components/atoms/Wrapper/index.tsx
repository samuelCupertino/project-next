import React from 'react'
import { Container } from './styles'

interface IWrapperProps{
  flexDirection?: 'row' | 'column'
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around'
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around'
  padding?: number[]
  margin?: number[]
  gap?: number
  bgColor?: 'bgPrimary' | 'bgSecondary' | 'bgTertiary'
  borderRadius?: number[]
  width?: number | string
}

export const Wrapper: React.FC<IWrapperProps> = ({ children, ...props }) => ( 
  <Container {...props}>{ children }</Container>
)
