import React from 'react'
import Img from 'next/image'
import { Container } from './styles'

interface IImageProps{
  src: string
  alt: string
  borderRadius?: string | number
  opacity?: number
  aspectRatio?: number
  width?: string | number
  height?: string | number
  margin?: (number|string)[] 
  borderColor?: 'primary' | 'secondary' | 'tertiary' | 'bgPrimary' | 'bgSecondary' | 'bgTertiary'
  borderWidth?: number
  cursor?: 'pointer' | 'default'
}

export const Image: React.FC<IImageProps> = ({ src, alt, ...props }) => {
  return ( 
    <Container {...props}>
      <Img height={200} width={200} src={src} alt={alt} /> 
    </Container>
  )
}
