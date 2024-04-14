import { Link } from '@remix-run/react';

const navList: string[] = [
  'All',
  'JavaScript',
  'Python',
  'Java',
  'Rust',
  'CSS',
];

export default function NavList() {
  return (
    <>
      <ul className="flex mx-auto">
        {navList.map((item) => (
          <li className="m-2 cursor-pointer active:bg-blue-600" key={item}>
            <Link to={`/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
