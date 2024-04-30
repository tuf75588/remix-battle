import { NavLink } from '@remix-run/react';

export default function NavList(): JSX.Element {
  return (
    <>
      <NavLink
        to="/repos/javascript"
        className={({ isActive, isPending }) =>
          isPending ? 'pending' : isActive ? 'active' : ''
        }
      >
        JS
      </NavLink>
      
      <NavLink
        to="/repos/python"
        className={({ isActive, isPending }) =>
          isPending ? 'pending' : isActive ? 'active' : ''
        }
      >
        Python
      </NavLink>
    
      <NavLink
        to="/repos/rust"
        className={({ isActive, isPending }) =>
          isPending ? 'pending' : isActive ? 'active' : ''
        }
      >
        Rust
      </NavLink>
      
    </>
  );
}
