import React from "react";
import { Button, Card } from "react-bootstrap";

export default function Hw3() {
  return (
    <div>
      <h3>Home work 3</h3>
      <div style={{ display: "flex", gap: "20px" }}>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://cdn.tgdd.vn/Files/2019/07/17/1180055/macbookair2019vsmacbookpro2019_800x534.jpg"
          />
          <Card.Body>
            <Card.Title>MacBook Air 2018</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Xem chi tiết</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://i.rtings.com/assets/products/0F3KAC3z/apple-macbook-pro-16-2019/design-medium.jpg?format=auto"
          />
          <Card.Body>
            <Card.Title>MACbook Pro 2022</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Xem chi tiết</Button>
          </Card.Body>
        </Card>
      </div>
      <hr />
    </div>
  );
}
