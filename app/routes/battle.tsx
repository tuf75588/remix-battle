import { ActionFunctionArgs, json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getProfile, getRepos, getUserData } from './utils';

// eslint-disable-next-line @typescript-eslint/no-explicit-any

export const loader = async () => {
  const p = await getUserData('quincylarson');
  console.log(p)
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
        <form method="post">
          <label htmlFor="playerOne">Player One</label>
          <div className="flex">
            <input
              type="text"
              name="playerOne"
              id="playerOne"
              className="flex-1"
            />
            <button
              className="bg-[rebeccapurple] text-white p-2"
              type="submit"
              name="_action"
              value="playerOne"
            >
              Submit
            </button>
          </div>
        </form>
        <form method="post">
          <label htmlFor="playerTwo">Player Two</label>
          <div className="flex">
            <input
              type="text"
              name="playerTwo"
              id="playerTwo"
              className="flex-1"
            />
            <button
              className="bg-[rebeccapurple] text-white flex-1 p-2"
              type="submit"
              name="_action"
              value="playerTwo"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
