import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <h1>404 Not Found</h1>
      <Link to="/">
        <h2 style={{ color: 'black', textDecoration: 'underline' }}>
          Return to safety !
        </h2>
      </Link>
    </>
  );
}

export default NotFound;
