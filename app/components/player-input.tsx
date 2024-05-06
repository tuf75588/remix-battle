export default function PlayerInput({ username }: { username: string }) {
  return (
    <form method="post">
      <label htmlFor={username}>Player Two</label>
      <div className="flex">
        <input type="text" name="playerTwo" id="playerTwo" className="flex-1" />
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
  );
}
