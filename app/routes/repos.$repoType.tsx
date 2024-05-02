import { LoaderFunctionArgs, defer, json } from '@remix-run/node';
import { searchRepos } from './utils';
import invariant from 'tiny-invariant';
import { useLoaderData, useNavigation } from '@remix-run/react';

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
    <div className="flex flex-wrap items-center justify-center">
      {navigation.state !== 'idle' ? (
        <div>Loading...</div>
      ) : (
        data.map(
          (item: {
            id: string;
            name: string;
            owner: { avatar_url: string };
          }) => (
            <div
              className="text-center flex flex-col m-3 bg-coolGray-300 p-8 max-w-lg w-[400px]"
              key={item.id}
            >
              <p className="my-2">{item.name}</p>
              <img
                src={item.owner.avatar_url}
                alt={item.id}
                className="h-[50px] w-[50px] mx-auto"
              />
            </div>
          )
        )
      )}
    </div>
  );
}
