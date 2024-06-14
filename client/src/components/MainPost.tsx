import axios, { AxiosPromise, AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import baseURL from "../Api";
import Post from "../model/Post";
import Hw4 from "./Hw4";
import Hw6 from "./Hw6";
import Hw10 from "./Hw10";
import Hw12 from "./Hw12";

export default function MainPost() {
  let [data, setData] = useState<Post[]>([]);
  //get data
  useEffect(() => {
    baseURL
      .get(`/posts`)
      .then((res: AxiosResponse) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-9/12 bg-slate-200 p-5">
      {/* header */}
      <div className="flex justify-between">
        <div className="flex gap-5">
          <Hw10></Hw10>
          <Hw12></Hw12>
        </div>
        <button>+ Thêm mới bài viết</button>
      </div>
      {/* body */}
      <Hw4 data={data}></Hw4>
    </div>
  );
}
