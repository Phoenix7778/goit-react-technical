import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <>
      <h1>Error 404</h1>
      <p>This page doesn't exist!</p>
      <Link to="/">Back to the home page</Link>
    </>
  );
};
