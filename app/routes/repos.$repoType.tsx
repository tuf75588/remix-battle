import type { FunctionComponent } from 'react';
import getPopularRepos, { itemSelected } from './utils';
import { type LoaderFunctionArgs, json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import invariant from 'tiny-invariant';

export const loader = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.repoType, 'Invalid repo type');
  const item_selected = itemSelected(params.repoType);
  return { item_selected };
};

export default function RepoType() {
  const { item_selected } = useLoaderData<typeof loader>();
  return <div className="mx-auto text-center">repo page! {item_selected}</div>;
}
