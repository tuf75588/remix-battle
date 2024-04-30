import { LoaderFunctionArgs, defer, json } from '@remix-run/node';
import { searchRepos } from './utils';
import invariant from 'tiny-invariant';
import { Await, useLoaderData } from '@remix-run/react';
import { Suspense } from 'react';

export async function loader({ params }: LoaderFunctionArgs) {
  invariant(params.repoType, 'Invalid repo type');
  return defer({
    data: searchRepos(params.repoType).then((res) => res),
  });
}

export default function RepoType() {
  const { data } = useLoaderData<typeof loader>();
  console.log('loading');
  return (
    <div className="flex flex-wrap justify-center">
      <Suspense fallback={<div>loading</div>}>
        <Await resolve={data}>
          {(data) =>
            data.map(
              (item: { id: string; name: string; description: string }) => (
                <p key={item.id}>{item.description}</p>
              )
            )
          }
        </Await>
      </Suspense>
    </div>
  );
}
