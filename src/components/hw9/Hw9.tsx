import React from "react";
import {
  Button,
  Dropdown,
  DropdownButton,
  Form,
  InputGroup,
} from "react-bootstrap";

export default function Hw9() {
  return (
    <div>
      <h3>Home work 9</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "60%",
        }}
      >
        <h1>Sign Up</h1>
        <div style={{ display: "flex", gap: "20px" }}>
          <label htmlFor="">Email</label>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="email"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <label htmlFor="">Password</label>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="password"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </div>
        <label htmlFor="">Full name</label>
        <br />
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="full name"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <label htmlFor="">Address</label>
        <br />
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="address"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <div style={{ display: "flex", gap: "20px" }}>
          <label htmlFor="">City</label>
          <DropdownButton id="dropdown-basic-button" title="Choose your city">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
          <label htmlFor="">District</label>
          <DropdownButton
            id="dropdown-basic-button"
            title="Choose your district "
          >
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
          <label htmlFor="">Post office code</label>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="code"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </div>
        <Button variant="primary" style={{ width: "30%" }}>
          Submit
        </Button>
      </div>
      <hr />
    </div>
  );
}
