import React, {useState, useEffect} from 'react'
import { Container } from './styles'
import { Scroll, GridFluid } from '../../atoms'
import { CardUserRepos } from '../../molecules'

import { IFollowingRepos } from '../../../services/api'

interface IMainListReposProps {
  followingRepos: IFollowingRepos[]
}

export const MainListRepos: React.FC<IMainListReposProps> = ({ followingRepos }) => {

  return (
    <Container>
      <Scroll height="100%" gap={20}>
        <GridFluid gap={20} itemMinWidth={270}>
          {followingRepos.map((repos, index) => (
            <CardUserRepos key={index} repos={repos}/>
          ))}
        </GridFluid>
      </Scroll>
    </Container>
  )
}
