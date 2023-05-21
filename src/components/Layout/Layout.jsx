import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Loader } from '../Loader/Loader';

export const Layout = () => {
  return (
    <div>
      <header
        style={{
          paddingBottom: '20px',
          paddingTop: '20px',
        }}
      >
        <nav
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            fontSize: '20px',
            textDecoration: 'none',
          }}
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/tweets">Tweets</NavLink>
        </nav>
      </header>
      <main
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
