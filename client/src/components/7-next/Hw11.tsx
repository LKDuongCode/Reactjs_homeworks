import React from "react";

export default function Hw11() {
  //component hiển thị bản ghi và chuyển trang.
  return (
    <>
      <div className="clearfix">
        <div className="hint-text">
          Hiển thị <b>5</b>/<b>10 </b>bản ghi
        </div>
        <ul className="pagination">
          <li className="page-item disabled">
            <a href="#">Trước</a>
          </li>
          <li className="page-item">
            <a href="#" className="page-link">
              1
            </a>
          </li>
          <li className="page-item">
            <a href="#" className="page-link">
              2
            </a>
          </li>
          <li className="page-item active">
            <a href="#" className="page-link">
              3
            </a>
          </li>
          <li className="page-item">
            <a href="#" className="page-link">
              4
            </a>
          </li>
          <li className="page-item">
            <a href="#" className="page-link">
              5
            </a>
          </li>
          <li className="page-item">
            <a href="#" className="page-link">
              Sau
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
