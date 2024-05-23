import { useFetcher } from '@remix-run/react';
import React, { useState } from 'react';

export default function PlayerInput(props: { position: number }) {
  const fetcher = useFetcher();
  const [username, setUsername] = useState('');
  let handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('running handlesubmit');
  };
  return (
    <div>
      <fetcher.Form method="post" onSubmit={handleSubmit}>
        <label className="mr-2" htmlFor="playerOne">
          Player {props.position}{' '}
        </label>
        <input
          type="text"
          className="p-2 rounded"
          placeholder="player one"
          onChange={(e) => setUsername(e.currentTarget.value)}
        />
        <button
          type="submit"
          className="ml-3 bg-slate-900 text-slate-100 p-2 rounded"
        >
          Submit
        </button>
      </fetcher.Form>
    </div>
  );
}
