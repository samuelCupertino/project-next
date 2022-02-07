import type { GetStaticProps, NextPage } from 'next'

import { getFollowingRepos, getUserProfile } from '../services/api'

import { Home, IHomeProps } from '../components/templates'


export const getStaticProps:GetStaticProps = async () => {
  const userLogin = 'samuelCupertino'
  const followingRepos = await getFollowingRepos(userLogin)
  const userProfile = await getUserProfile(userLogin)

  return {
    props: {
      followingRepos,
      userProfile
    },
    revalidate: 3600
  }
}

const HomePage: NextPage<IHomeProps> = (props) => {
  return (
    <>
      {props.userProfile && props.followingRepos && (
        <Home 
          followingRepos={props.followingRepos}
          userProfile={props.userProfile}
        />
      )}
    </>
  )
}

export default HomePage
