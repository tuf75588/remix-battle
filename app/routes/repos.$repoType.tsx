import type { FunctionComponent } from 'react';
import getPopularRepos, { itemSelected } from './utils';
import { type LoaderFunctionArgs, json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import invariant from 'tiny-invariant';

export const loader = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.repoType, 'Invalid repo type');
  const item_selected = await getPopularRepos(params.repoType);

  return {};
};

export default function RepoType() {

  return <div className="mx-auto text-center">repo page</div>;
}
