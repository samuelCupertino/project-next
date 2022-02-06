import React from 'react'
import { Container } from './styles'
import { Icon, Text } from '../../atoms'

interface IButtonProps {
  iconName?: string
  bgColor?: 'bgPrimary' | 'bgSecondary' | 'bgTertiary'
  iconSize?: number
  fontSize?: number
  borderRadius?: number[] | string[]
  padding?: number[]
}

export const Button: React.FC<IButtonProps> = ({ 
  children, 
  iconName, 
  bgColor, 
  iconSize,
  fontSize,
  borderRadius,
  padding,
}) => {

  return (
    <Container bgColor={bgColor} borderRadius={borderRadius} padding={padding}>
      { iconName && <Icon iconName={iconName} fontSize={iconSize} /> }
      { children && <Text fontSize={fontSize} >{ children }</Text> }
    </Container>
  )
}
