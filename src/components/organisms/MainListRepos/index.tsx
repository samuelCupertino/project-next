import React, {useState, useEffect} from 'react'
import { Container } from './styles'
import { Scroll, GridFluid } from '../../atoms'
import { CardUserRepos } from '../../molecules'

import { getFollowingRepos } from '../../../services/api'


export const MainListRepos: React.FC = () => {
  const [repos, setRepos] = useState<any[]>([])

  useEffect(() => {
    getFollowingRepos('samuelCupertino').then(response => {
      setRepos(response)
    })
  }, [])


  return (
    <Container>
      <Scroll height="100%" gap={20}>
        <GridFluid gap={20} itemMinWidth={270}>
          {repos.map((repo, index) => (
            <CardUserRepos key={index} />
          ))}
        </GridFluid>
      </Scroll>
    </Container>
  )
}
