import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error-page">
      <h1>Oops! It's A Dead End</h1>
      <Link to="/">
        <button>BACK HOME</button>
      </Link>
    </section>
  );
};

export default Error;
