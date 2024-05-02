import {
  FaUser,
  FaStar,
  FaCodeBranch,
  FaExclamationTriangle,
} from 'react-icons/fa';

interface RepoCard {
  name: string;
  display_name: string;
  repoLink: string;
  stars?: number;
  forks: string;
  avatar_url: string;
  open_issues: string;
  rank: number;
  id: string;
}

export default function RepoCard({
  name,
  repoLink,
  display_name,
  stars,
  forks,
  rank,
  open_issues,
  avatar_url,
}: RepoCard) {
  return (
    <div className="bg-gray-200 max-w-md w-[250px] flex flex-col my-3 text-center p-5">
      <span className="text-xl"># {rank}</span>
      <img
        src={avatar_url}
        alt={name}
        className="w-[150px] h-[150px] mx-auto my-5"
      />
      <a className="text-[rgb(187,46,31)] font-bold text-xl" href={repoLink}>
        {display_name}
      </a>
      <ul>
        <li className="flex items-center m-2 text-lg">
          <FaUser color="rgb(255, 191, 116)" className="mr-3" size={22} />{' '}
          {display_name}
        </li>
        <li className="flex items-center m-2 text-lg">
          <FaStar color="rgb(255, 215, 0)" className="mr-3" size={22} />
          {stars} stars
        </li>
        <li className="flex items-center m-2 text-lg">
          <FaCodeBranch color="rgb(129, 195, 245)" className="mr-3" size={22} />
          {forks} forks
        </li>
        <li className="flex items-center m-2 text-lg">
          <FaExclamationTriangle
            color="rgb(241, 138, 147)"
            className="mr-3"
            size={22}
          />
          {open_issues} open issues
        </li>
      </ul>
    </div>
  );
}
