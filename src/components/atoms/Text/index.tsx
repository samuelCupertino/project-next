import React from 'react'
import { TextComponent } from './styles'

interface ITextProps {
  fontSize?: number
  margin?: number[]
  padding?: number[]
  color?: 'textPrimary' | 'textSecondary' | 'textTertiary'
}

export const Text: React.FC<ITextProps> = ({ children, ...props }) => {
  return (
    <TextComponent {...props}>{ children }</TextComponent>
  )
}
