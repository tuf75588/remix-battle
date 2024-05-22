import { ActionFunctionArgs, json } from '@remix-run/node';
import { useLoaderData, useActionData } from '@remix-run/react';
import { getRepos, getUserData } from './utils';
import GameForm from '~/components/game-form';

// eslint-disable-next-line @typescript-eslint/no-explicit-any

export const loader = async () => {
  return null;
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
      <div className="flex justify-evenly mt-[50px]">
        <GameForm />
      </div>
    </div>
  );
}
