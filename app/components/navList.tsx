import { Link, NavLink } from '@remix-run/react';

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
          <li className="m-2 cursor-pointer" key={item}>
            <NavLink
              to={`/repos/${item.toLocaleLowerCase()}`}
              className={({ isActive, isPending }) => {
                return isActive
                  ? 'text-slate-900 font-bold'
                  : isPending
                    ? 'pending'
                    : '';
              }}
            >
              {item}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}
