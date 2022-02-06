import React from 'react'
import { Container } from './styles'
import { Image, Icon } from '../../atoms'

export const Header: React.FC = () => {

  return (
    <Container>
      <Icon 
        iconName="HiOutlineSearch"  
        fontSize={30} 
        color="tertiary" 
        padding={[15]}
      />
      <Image 
        src="/github-dark.png" 
        alt="Logo Github"
        borderRadius="50%"
        opacity={0.85}
        height="100%"
        aspectRatio={1}
        margin={[0,0,0,'auto']}
      />
    </Container>
  )
}
