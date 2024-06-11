import axios from "axios";
import React, { createContext, memo, useEffect, useState } from "react";
import Hw8 from "./Hw8";
import Hw10 from "./Hw10";
export const SetId = createContext(-1);

interface Props {
  stdData: any;
}
function Hw7(props: Props) {
  //component table
  let { stdData } = props;
  // console.log(stdData);
  return (
    <>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>
              <b>Status</b>
            </th>
            <th>Tên sinh viên</th>
            <th>Email</th>
            <th>Địa chỉ</th>
            <th>Số điện thoại</th>
            <th>Lựa chọn</th>
          </tr>
        </thead>
        <tbody>
          {stdData?.map((e: any) => {
            return (
              <tr key={e.id}>
                <td>
                  <span className="custom-checkbox">
                    <input
                      type="checkbox"
                      id="checkbox5"
                      name="options[]"
                      defaultValue={1}
                    />
                    <label htmlFor="checkbox5" />
                  </span>
                </td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.address}</td>
                <td>{e.phone}</td>
                <td>
                  <Hw10></Hw10>
                  <SetId.Provider value={e.id}>
                    <Hw8></Hw8>
                  </SetId.Provider>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
export default memo(Hw7);
