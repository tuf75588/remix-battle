import { ActionFunctionArgs, json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getProfile, getRepos, getUserData } from './utils';
import PlayerInput from '~/components/player-input';

// eslint-disable-next-line @typescript-eslint/no-explicit-any

export const loader = async () => {
  return {};
};

export default function Battle() {
  return (
    <div>
      <h1 className="text-4xl text-center font-normal">Instructions</h1>
      <div className="mt-10 flex justify-around">
        <div>enter two github users</div>
        <div>battle</div>
        <div>see the winner</div>
      </div>

      <div className="flex justify-around mt-[50px]">
        <PlayerInput username="tuf75588" />
        <PlayerInput username="quincylarson" />
      </div>
    </div>
  );
}
