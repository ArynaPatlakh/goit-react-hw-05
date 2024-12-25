import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <Link to="/">List of trending movies</Link>

      <h2>Ooops... Page is not found!</h2>
    </div>
  );
};

export default NotFoundPage;
