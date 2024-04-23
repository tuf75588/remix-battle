import type { MetaFunction } from '@remix-run/node';


export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export const loader = async () => {
  return {}
}

export default function Index() {
  return (
    <div>
      <div className="text-center">welcome!</div>
    </div>
  );
}
