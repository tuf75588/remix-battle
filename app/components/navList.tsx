import { NavLink } from '@remix-run/react';

export default function NavList(): JSX.Element {
  return (
    <nav>
      <ul className="flex flex-row justify-center">
        <li className="m-2">
          <NavLink
            to="/repos/all"
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'font-bold' : ''
            }
          >
            All
          </NavLink>
        </li>
        <li className="m-2">
          <NavLink
            to="/repos/javascript"
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'font-bold' : ''
            }
          >
            JavaScript
          </NavLink>
        </li>
        <li className="m-2">
          <NavLink
            to="/repos/java"
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'font-bold' : ''
            }
          >
            Java
          </NavLink>
        </li>
        <li className="m-2">
          <NavLink
            to="/repos/python"
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'font-bold' : ''
            }
          >
            Python
          </NavLink>
        </li>
        <li className="m-2">
          <NavLink
            to="/repos/rust"
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'font-bold' : ''
            }
          >
            Rust
          </NavLink>
        </li>
        <li className="m-2">
          <NavLink
            to="/repos/css"
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'font-bold' : ''
            }
          >
            CSS
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
