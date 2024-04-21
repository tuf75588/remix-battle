import { Octokit } from '@octokit/rest';

const octokit = new Octokit({
  auth: process.env.GITHUB_SECRET,
});


export default async function getPopularRepos(language: string) {
  const request = await octokit.request(`GET https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`, {
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
  return request
}

