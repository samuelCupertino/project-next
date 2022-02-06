import React from 'react'
import * as Icons from 'react-icons/hi'
import { Container } from './styles'

const getIconByName = (iconName:string) => (
  Object.entries(Icons)
    .reduce((acc, [name, icon]) => (
      name === iconName ? icon : acc
    ), Icons.HiOutlineQuestionMarkCircle)
)

interface IIconProps{
  iconName: string
  color?: 'primary' | 'secondary' | 'tertiary' | 'textPrimary' | 'textSecondary' | 'textTertiary'
  fontSize?: number
  padding?: number[]
  cursor?: 'pointer' | 'default'
}

export const Icon: React.FC<IIconProps> = ({ iconName, padding, color, cursor, ...props }) => {
  const IconComponent = getIconByName(iconName)

  return ( 
    <Container padding={padding} color={color} cursor={cursor}>
      <IconComponent fontSize={14} {...props} display="flex"/> 
    </Container>
  )
}
