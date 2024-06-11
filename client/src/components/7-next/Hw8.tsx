import React, { useContext, useState } from "react";
import { SetId } from "./Hw7";
export default function Hw8() {
  //components delete
  // lấy id truyền từ hw7 để xóa
  let getId = useContext(SetId);
  // console.log(getId);
  let notChange = () => {
    alert("Không có gì thay đổi!");
  };
  let [status, setStatus] = useState(false); //state kiểm tra confirm.

  let handleDelete = () => {
    // conswole.log(getId);
  };

  return (
    <>
      <a
        href="#deleteEmployeeModal"
        className="delete"
        data-toggle="modal"
        onClick={handleDelete}
      >
        <i className="material-icons" data-toggle="tooltip" title="Delete">
          
        </i>
      </a>
      {/* Delete Modal HTML */}
      <div id="deleteEmployeeModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <form>
              <div className="modal-header">
                <h4 className="modal-title">Xóa nhân viên</h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  ×
                </button>
              </div>
              <div className="modal-body">
                <p>Bạn chắc chắn muốn xóa sinh viên này?</p>
              </div>
              <div className="modal-footer">
                <input
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                  defaultValue="Hủy"
                  onClick={notChange}
                />
                <input
                  type="button"
                  className="btn btn-danger"
                  defaultValue="Xóa"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
