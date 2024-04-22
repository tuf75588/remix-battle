export default async function getPopularRepos(language: string) {
  const endpoint = encodeURI(
    `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
  );

  const request = await fetch(endpoint, {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
  });
  const response = await request.json();
  return response.items;
}
