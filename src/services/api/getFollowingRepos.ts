export interface IFollowingRepos {
    name: string
    description: string
    language: string
    stars: number
    forks: number
    url: string
    owner: {
        login: string
        avatar: string
    }
}

export const getFollowingRepos = async (userLogin: string):Promise<IFollowingRepos[]> => {
    const followingRes = await fetch(`https://api.github.com/users/${userLogin}/following`)
    if(!followingRes.ok) return []

    const following = await followingRes.json()

    const getReposFromUser = async (userLogin: string):Promise<IFollowingRepos[]> => {
        const reposRes = await fetch(`https://api.github.com/users/${userLogin}/repos`)
        const [lastRepos] = await reposRes.json()
        
        if(!lastRepos) return []

        const repos: IFollowingRepos = {
            name: lastRepos.name,
            description: lastRepos.description,
            language: lastRepos.language,
            stars: lastRepos.stargazers_count,
            forks: lastRepos.forks,
            url: lastRepos.html_url,
            owner: {
                login: lastRepos.owner.login,
                avatar: lastRepos.owner.avatar_url
            }
        }

        return [ repos ]
    }

    const followingRepos:Promise<IFollowingRepos>[] = following.reduce(async (acc: IFollowingRepos[], following: Record<string,string>) => {
        const [lastRepos] = await getReposFromUser(following.login)

        return lastRepos ? [ ...acc, lastRepos ] : acc
    }, [] as IFollowingRepos[])

    return Array.isArray(followingRepos) ? Promise.all(followingRepos) : []
}