import { ActionFunctionArgs, json } from '@remix-run/node';
import { useLoaderData, useActionData } from '@remix-run/react';
import { getRepos, getUserData } from './utils';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
//

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const { _action, ...values } = Object.fromEntries(formData);
  if (_action === 'playerOne') {
    let p1 = await getUserData(values.playerOne, 1);
    return p1;
  }
  if (_action === 'playerTwo') {
    let p2 = await getUserData(values.playerTwo, 2);
    return p2;
  }
  return {};
};

export default function Battle() {
  const data = useActionData<typeof action>();
  console.log(data);
  return (
    <div>
      <h1 className="text-4xl text-center font-normal">Instructions</h1>
      <div className="mt-10 flex justify-around">
        <div>enter two github users</div>
        <div>battle</div>
        <div>see the winner</div>
      </div>

      <div className="flex justify-around mt-[50px]">
        {data && (data as { position: number }).position === 1 ? (
          <p>one</p>
        ) : (
          <form method="post">
            <label htmlFor="playerOne">Player One</label>
            <div className="flex">
              <input type="text" name="playerOne" className="flex-1" />
              <button
                className="bg-[rebeccapurple] text-white p-2"
                type="submit"
                name="_action"
                value="playerOne"
              >
                Submit
              </button>
              <input type="hidden" value="playerOne" />
            </div>
          </form>
        )}
        {data && (data as { position: number }).position === 2 ? (
          <p>two</p>
        ) : (
          <form method="post">
            <label htmlFor="playerTwo">Player Two</label>
            <div className="flex">
              <input type="text" name="playerTwo" className="flex-1" />
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
        )}
      </div>
    </div>
  );
}
