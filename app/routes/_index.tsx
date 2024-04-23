import type { MetaFunction } from '@remix-run/node';
import { json, useLoaderData } from 'react-router';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};


export default function Index() {

  return (
    <div>
      <div className="text-center">welcome!</div>
    </div>
  );
}
