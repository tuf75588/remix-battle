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

export async function getRepos(username: string) {
  const url = `https://api.github.com/users/${username}/repos`;
  const request = await octokit.request(`GET ${url}`, {
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });
  return request.data;
}

export async function getProfile(username: string) {
  const url = `https://api.github.com/users/${username}`;
  const request = await octokit.request(`GET ${url}`, {
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });

  return request.data;
}

export async function getUserData(player: string) {
  return Promise.all([getProfile(player), getRepos(player)]).then(
    ([profile, repos]) => ({
      profile,
      score: calculateScore(profile.followers, repos),
    })
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getStarCount(repos: any) {
  return repos.reduce(
    (count: number, { stargazers_count }: { stargazers_count: number }) =>
      count + stargazers_count,
    0
  );
}

function calculateScore(followers, repos) {
  return followers * 3 + getStarCount(repos);
}
