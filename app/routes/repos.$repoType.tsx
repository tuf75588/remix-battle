import type { FunctionComponent } from 'react';
import getPopularRepos, { itemSelected } from './utils';
import { type LoaderFunctionArgs, json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import invariant from 'tiny-invariant';

export const loader = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.repoType, 'Invalid repo type');
  const selectedLanguage = await getPopularRepos(params.repoType);

  return selectedLanguage;
};

export default function RepoType() {
  const selected_lang = useLoaderData<typeof loader>();
  return (
    <div className="mx-auto text-center">
      {selected_lang
        ? selected_lang.map((item: { name: string, id:string }) => {
           return <p key={item.id}>{item.name}</p>;
          })
        : ''}
    </div>
  );
}
