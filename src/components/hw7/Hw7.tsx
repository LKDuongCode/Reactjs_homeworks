import React from "react";
import { Toast, ToastContainer } from "react-bootstrap";

export default function Hw7() {
  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className=" position-relative"
      style={{ minHeight: "240px" }}
    >
      <h3>Home work 7</h3>
      <ToastContainer className="p-3" style={{ zIndex: 1 }}>
        <Toast>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Warming</strong>
            <small className="text-muted"></small>
          </Toast.Header>
          <Toast.Body>Sever conection error </Toast.Body>
        </Toast>
      </ToastContainer>
      <br />
    </div>
  );
}
