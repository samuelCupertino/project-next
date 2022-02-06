import type { GetStaticProps, NextPage } from 'next'
import { getFollowingRepos, getUserProfile } from '../services/api'

import { Home, IHomeProps } from '../components/templates'



export const getStaticProps:GetStaticProps<IHomeProps> = async () => {
  const followingRepos = await getFollowingRepos('samuelCupertino')
  const userProfile = await getUserProfile('samuelCupertino')

  return {
    props: {
      followingRepos,
      userProfile
    },
    revalidate: 20
  }
}


const HomePage: NextPage<IHomeProps> = (props) => {
  return (
    <>
      <div style={{height:50, overflow:'scroll'}}>test: {JSON.stringify(props.followingRepos)}</div>
      <Home 
        followingRepos={props.followingRepos}
        userProfile={props.userProfile}
      />
    </>
  )
}

export default HomePage
