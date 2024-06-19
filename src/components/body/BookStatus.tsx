import React from "react";
interface Props {
  status: string;
}
export default function BookStatus(props: Props) {
  let { status } = props;
  return (
    <>
      <select className="rounded-xl border-transparent bg-red-400">
        <option value="">Đã trả</option>
        <option value="">Chưa trả</option>
      </select>
    </>
  );
}
