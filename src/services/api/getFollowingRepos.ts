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
    const followingLimited = following.slice(0, 10)

    const followingRepos:IFollowingRepos[] = await followingLimited.reduce(async (
        acc: IFollowingRepos[],
        {login}: Record<string,string>
    ) => {
        const reposRes = await fetch(`https://api.github.com/users/${login}/repos`)
        if(!reposRes.ok) return acc

        const [lastRepos] = await reposRes.json()
        if(!lastRepos) return acc

        const repos: IFollowingRepos = {
            name: lastRepos.name,
            description: lastRepos.description,
            language: lastRepos.language,
            stars: lastRepos.stargazers_count,
            forks: lastRepos.forks,
            url: lastRepos.html_url,
            owner: {
                login: lastRepos.owner?.login,
                avatar: lastRepos.owner?.avatar_url
            }
        }

        return [ ...(await acc), repos ]
    }, [])

    return followingRepos
}