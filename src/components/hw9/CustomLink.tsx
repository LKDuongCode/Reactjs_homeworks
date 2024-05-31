import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function CustomLink() {
  let location = useLocation();

  return (
    <div>
      <Link to={location.pathname === "/home-page" ? "home-page" : "*"}>
        Link home page
      </Link>
    </div>
  );
}
