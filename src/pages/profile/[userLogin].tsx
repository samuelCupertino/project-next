import type { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'

import { getFollowingRepos, getUserProfile } from '../../services/api'

import { Home, IHomeProps } from '../../components/templates'


interface IParamsUrl extends ParsedUrlQuery {
  userLogin: string
}

export const getStaticPaths:GetStaticPaths = async () => {
  return {
    paths: [
      { params: { userLogin: 'samuelCupertino' } }
    ],
    fallback: true
  }
}

export const getStaticProps:GetStaticProps = async (context) => {
  const { userLogin } = context.params as IParamsUrl

  const followingRepos = await getFollowingRepos(userLogin)
  const userProfile = await getUserProfile(userLogin)

  return {
    props: {
      followingRepos,
      userProfile
    },
    revalidate: 10
  }
}

const HomePage: NextPage<IHomeProps> = (props) => {
  return (
    <>
      <div style={{height:50, overflow:'scroll'}}>test: {JSON.stringify(props)}</div>
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
