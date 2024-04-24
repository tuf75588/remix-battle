import { Octokit } from 'octokit';

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
export async function searchRepos(language: string) {
  try {
    const url = `https://api.github.com/search/repositories?q=stars%3A>%3D500+language%3A${language}&type=Repositories`;
    const request = await octokit.request(`GET ${url}`, {
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });
    return request.data.items;
  } catch (error: unknown) {
    throw new Error((error as Error).message);
  }
}
