import React from "react";
import Post from "../model/Post";

interface Props {
  data: Post[];
}
//cpn render
export default function Hw4(pros: Props) {
  let { data } = pros;

  return (
    <>
      <div>
        <table border={1}>
          <thead>
            <tr>
              <th>STT</th>
              <th>Tiêu đề bài viết</th>
              <th>Hình ảnh</th>
              <th>Ngày viết</th>
              <th>Trạng thái</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody className="mt-5">
            {data.map((post, index) => {
              return (
                <tr key={index + 1}>
                  <td>{index + 1}</td>
                  <td>{post.title}</td>
                  <td>
                    <img src={post.img} alt="" className="w-28 h-20" />
                  </td>
                  <td>{post.date}</td>
                  <td>{post.status}</td>
                  <td>
                    <button>Chặn</button>
                    <button>Sửa</button>
                    <button>Xóa</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
