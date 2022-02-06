import React from 'react'
import { TitleComponent } from './styles'

interface ITitleProps {
  fontSize?: number
  margin?: number[]
  padding?: number[]
  color?: 'primary' | 'secondary' | 'tertiary' | 'textPrimary' | 'textSecondary' | 'textTertiary'
  cursor?: 'pointer' | 'default'
}

export const Title: React.FC<ITitleProps> = ({ children, ...props }) => {
  return (
    <TitleComponent {...props}>{ children }</TitleComponent>
  )
}
