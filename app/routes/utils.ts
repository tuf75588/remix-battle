import { Octokit } from '@octokit/rest';

const octokit = new Octokit({
  auth: process.env.GITHUB_SECRET,
});

export default async function getPopularRepos() {
  const request = await octokit.request(
    `GET https://api.github.com/search/repositories?q=stars:>1+language:all&sort=stars&order=desc&type=Repositories`,
    {
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    }
  );
  return request.data;
}

export function itemSelected(lang: string) {
  return lang;
}
