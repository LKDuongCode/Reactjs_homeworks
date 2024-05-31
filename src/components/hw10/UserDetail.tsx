import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function UserDetail({ user }: any) {
  let listUser: User[] = [
    {
      id: 1,
      name: "duong",
      email: "duong@gmail.com",
      address: "HN",
    },
    {
      id: 2,
      name: "hoang",
      email: "goang@gmail.com",
      address: "BG",
    },
    {
      id: 3,
      name: "doan",
      email: "doan@gmail.com",
      address: "PT",
    },
  ];
  const { userId } = useParams();

  console.log(useParams());

  const [userInfo, setUserInfo] = useState<any>({});

  useEffect(() => {
    const find = listUser.find((user) => user.id == userId);
    setUserInfo(find);
  }, [userId]);
  return (
    <div>
      <p>UserName: {user?.name || userInfo?.name}</p>
      <p>Email: {user?.email || userInfo?.email}</p>
      {!userInfo ? (
        <Link to={`/user-detail/${user?.id}`}>Xem chi tiet</Link>
      ) : (
        <>---</>
      )}
    </div>
  );
}
