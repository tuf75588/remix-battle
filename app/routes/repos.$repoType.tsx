import { LoaderFunctionArgs, json } from '@remix-run/node';
import { searchRepos } from './utils';
import invariant from 'tiny-invariant';
import { useLoaderData } from '@remix-run/react';

export async function loader({ params }: LoaderFunctionArgs) {
  invariant(params.repoType, 'Invalid repo type');
  const q = await searchRepos(params.repoType);
  return json(q);
}

export default function RepoType() {
  const selected_lang = useLoaderData<typeof loader>();
  console.log(selected_lang);
  return (
    <div className="flex flex-wrap justify-center">
      {selected_lang
        ? selected_lang.map((item: { name: string; id: string }) => (
            <p key={item.id}>{item.name}</p>
          ))
        : ''}
    </div>
  );
}
