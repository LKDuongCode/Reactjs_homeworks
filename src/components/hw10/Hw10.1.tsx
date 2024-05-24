import React from "react";
import { Button, Table } from "react-bootstrap";

export default function Hw10() {
  return (
    <div>
      <h3>Home work 10</h3>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>STT</th>
              <th>Full Name</th>
              <th>Sex</th>
              <th>Birth Day</th>
              <th>Email</th>
              <th>Address</th>
              <th>Function</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Male</td>
              <td>01/01/2001</td>
              <td>mark@gmail.com</td>
              <td>Old York</td>
              <td>
                <Button variant="warning">Update</Button>{" "}
                <Button variant="danger">Delete</Button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Male</td>
              <td>01/01/2001</td>
              <td>mark@gmail.com</td>
              <td>Old York</td>
              <td>
                <Button variant="warning">Update</Button>{" "}
                <Button variant="danger">Delete</Button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Male</td>
              <td>01/01/2001</td>
              <td>mark@gmail.com</td>
              <td>Old York</td>
              <td>
                <Button variant="warning">Update</Button>{" "}
                <Button variant="danger">Delete</Button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Male</td>
              <td>01/01/2001</td>
              <td>mark@gmail.com</td>
              <td>Old York</td>
              <td>
                <Button variant="warning">Update</Button>{" "}
                <Button variant="danger">Delete</Button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Male</td>
              <td>01/01/2001</td>
              <td>mark@gmail.com</td>
              <td>Old York</td>
              <td>
                <Button variant="warning">Update</Button>{" "}
                <Button variant="danger">Delete</Button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Male</td>
              <td>01/01/2001</td>
              <td>mark@gmail.com</td>
              <td>Old York</td>
              <td>
                <Button variant="warning">Update</Button>{" "}
                <Button variant="danger">Delete</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <hr />
    </div>
  );
}
