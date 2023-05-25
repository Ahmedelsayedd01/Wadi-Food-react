import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="page-NF">
      <h3>Sorry, this page isn't available.</h3>
      <h1>404</h1>
      <p>
        The link you followed may be broken, or the page may have been removed.
      </p>
        <Link className="link-back" to={"/aboutUs"}>Go Back</Link>
    </div>
  );
};

export default NotFound;
