import {  ActionFunctionArgs, json } from '@remix-run/node';
import { useLoaderData, useActionData } from '@remix-run/react';
import { getRepos, getUserData } from './utils';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
//

export const action = async ( { request }: ActionFunctionArgs) => {
  console.log(request.url);
  return null;
}
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
        <p>this is where the players will go</p>
        <form method="post">
          <button type="submit" name="submit">submit</button>
        </form>
      </div>
    </div>
  );
}
