import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
export default function Hw1() {
  return (
    <div>
      <h3>Home work 1</h3>
      <Button variant="primary">Lưu </Button>{" "}
      <Button variant="secondary">Hủy</Button>{" "}
      <Button variant="success">Thành công</Button>{" "}
      <Button variant="warning">Cảnh báo</Button>{" "}
      <Button variant="danger">Báo lỗi</Button>{" "}
      <Button variant="info">Thông tin</Button>{" "}
      <Button variant="link">Đường dẫn</Button>
      <hr />
    </div>
  );
}
