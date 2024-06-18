import React from "react";
import { useSelector } from "react-redux";

export default function Profile() {
  let user: any = useSelector((state: any) => {
    return state.reducerUsers;
  });

  return (
    <div>
      {user.map((item: any, index: number) => {
        return (
          <div key={index}>
            <p>Id:{item.id}</p>
            <p>Id:{item.name}</p>
            <p>Id:{item.sex}</p>
            <p>Id:{item.born}</p>
            <p>Id:{item.address}</p>
          </div>
        );
      })}
    </div>
  );
}
