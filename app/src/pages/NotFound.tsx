import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <h1>404 Not Found</h1>
      <Link to="/"> Return to safety !</Link>
    </>
  );
}

export default NotFound;
