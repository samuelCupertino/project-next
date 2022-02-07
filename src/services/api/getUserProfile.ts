export interface IRepos {
    name: string
    description: string
    language: string
    stars: number
    forks: number
    url: string
}

export interface IUserProfile {
    name: string
    login: string
    avatar: string
    public_repos: number
    followers: number
    following: number
    repos: IRepos[]
}

export const getUserProfile = async (userLogin: string):Promise<IUserProfile> => {    
    const headers = {
        headers: {
            'Authorization': `token ${process.env.GITHUB_TOKEN}`
        }
    }
    const userRes = await fetch(`https://api.github.com/users/${userLogin}`, headers)
    const user = userRes.ok ? await userRes.json() : {}

    const reposRes = await fetch(`https://api.github.com/users/${userLogin}/repos?page=1&per_page=10`, headers)
    const reposData = await reposRes.json()
    const arrRepos = Array.isArray(reposData) ? reposData : []

    const repos: IRepos[] = arrRepos.map(repo => ({
        name: repo.name,
        description: repo.description,
        language: repo.language,
        stars: repo.stargazers_count,
        forks: repo.forks,
        url: repo.html_url
    }))

    const userProfile: IUserProfile = {
        name: user.name || '',
        login: user.login || '',
        avatar: user.avatar_url || '/github-dark.png',
        public_repos: user.public_repos || 0,
        followers: user.followers || 0,
        following: user.following || 0,
        repos
    }

    return userProfile
}