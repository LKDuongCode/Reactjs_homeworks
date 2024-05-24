import React from "react";
import { Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
export default function Hw5() {
  return (
    <div>
      <h3>Home work 5</h3>
      {[
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
      ].map((variant) => (
        <Alert
          key={variant}
          variant={variant}
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <div>This is a {variant} alert—check it out! </div>
          <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
        </Alert>
      ))}
      <hr />
    </div>
  );
}
