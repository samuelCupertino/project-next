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
  margin?: (number|string)[]
  cursor?: 'pointer' | 'default'
  rotate?: number
  onClick?: () => void
}

export const Icon: React.FC<IIconProps> = ({ padding, color, cursor, rotate, margin, onClick, iconName, ...props }) => {
  const IconComponent = getIconByName(iconName)

  return ( 
    <Container {...{padding, color, cursor, rotate, margin, onClick}} className={`icon-${iconName}`} >
      <IconComponent fontSize={14} {...props} display="flex"/> 
    </Container>
  )
}
