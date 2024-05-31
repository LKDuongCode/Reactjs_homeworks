import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="mt-40">
      <Form
        className="w-1/2
       border-2
       border-gray-200
       rounded-md
       m-auto
       p-5
       "
      >
        <br />
        <h3 className="text-center text-3xl font-semibold">Login Account</h3>
        <br />
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="font-semibold">Your email</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="font-semibold">Your password</Form.Label>
          <Form.Control type="email" placeholder="******" />
        </Form.Group>
        <br />
        <Button variant="primary" className="w-full">
          Login
        </Button>
        <br />
        <br />
        <div className="flex gap-2 justify-center">
          <span>Already have an account?</span> {"  "}
          <Link className="font-semibold" to="/register">
            Register here!
          </Link>
        </div>
      </Form>
    </div>
  );
}
