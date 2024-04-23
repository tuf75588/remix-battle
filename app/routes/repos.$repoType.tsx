import type { FunctionComponent } from 'react';
import getPopularRepos, { itemSelected } from './utils';
import { type LoaderFunctionArgs, json } from '@remix-run/node';
import { useLoaderData, useNavigation } from '@remix-run/react';
import invariant from 'tiny-invariant';

export const loader = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.repoType, 'Invalid repo type');
  const selectedLanguage = await getPopularRepos(params.repoType);

  return json(selectedLanguage);
};

export default function RepoType() {
  const selected_lang = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  console.log(navigation);
  return (
    <div className="flex flex-wrap justify-center">
      {navigation.state === 'loading' ? (
        <div className="spinner" />
      ) : (
        selected_lang.map((item: { name: string; id: string }) => {
          return <Card key={item.id} name={item.name} />;
        })
      )}
    </div>
  );
}

function Card(props: { name: string }) {
  return (
    <div className="bg-slate-900 m-2 max-w-md">
      <p className="text-white text-center">{props.name}</p>
      <p className="text-white">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est magnam ad
        esse dignissimos, impedit quae. Ut eius ex incidunt dolores.
      </p>
    </div>
  );
}
function PendingNavigation() {
  return navigation.state === 'loading' ? <div className="spinner" /> : null;
}
