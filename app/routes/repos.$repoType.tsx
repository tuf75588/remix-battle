import { LoaderFunctionArgs, json } from '@remix-run/node';
import { searchRepos } from './utils';
import invariant from 'tiny-invariant';
import { useLoaderData, useNavigation } from '@remix-run/react';
import RepoCard from '~/components/repo-card';

export async function loader({ params }: LoaderFunctionArgs) {
  invariant(params.repoType, 'Invalid repo type');
  const repos = await searchRepos(params.repoType);
  return json(repos);
}

// export const shouldRevalidate = () => false;

export default function RepoType() {
  const data = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  return (
    <div className="flex flex-wrap items-center justify-around">
      {navigation.state !== 'idle' ? (
        <div>Loading...</div>
      ) : (
        data.map(
          (item: {
            id: string;
            name: string;
            forks: string;
            html_url: string;
            open_issues: string;
            stargazers_count: number;
            owner: { avatar_url: string; login: string };
          }, index: number) => (
            <RepoCard
              rank={index + 1}
              name={item.name}
              key={item.id}
              display_name={item.owner.login}
              id={item.id}
              avatar_url={item.owner.avatar_url}
              forks={item.forks}
              repoLink={item.html_url}
              open_issues={item.open_issues}
              stars={item.stargazers_count}
            />
          )
        )
      )}
    </div>
  );
}
