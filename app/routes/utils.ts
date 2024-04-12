import { Octokit } from '@octokit/rest';

const octokit = new Octokit({
  auth: process.env.GITHUB_SECRET,
});


export default async function getRepoData() {
  const request = await octokit.request('GET /search/repositories?q=jquery+in%3Aname&type=Repositories', {
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
  return request
}

