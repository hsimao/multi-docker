import React from "react";
import { Link } from "react-router-dom";

const OtherPage = () => {
  return (
    <div>
      <div>
        Im some other page!
        <Link to="/">Go back home</Link>
      </div>
    </div>
  );
};

export default OtherPage;
