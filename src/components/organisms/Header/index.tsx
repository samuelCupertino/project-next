import React from 'react'
import { Container } from './styles'
import { Image, Icon } from '../../atoms'

interface IHeaderProps {
  handleProfileBar: () => void
}
export const Header: React.FC<IHeaderProps> = ({ handleProfileBar }) => {

  return (
    <Container>
      <Icon 
        iconName="HiOutlineSearch"  
        fontSize={30} 
        color="tertiary" 
        padding={[15]}
      />
      <Icon 
        iconName="HiMenuAlt1"  
        fontSize={30} 
        color="tertiary" 
        cursor="pointer"
        padding={[15]}
        margin={[0,0,0,'auto']}
        onClick={handleProfileBar}
      />
    </Container>
  )
}
