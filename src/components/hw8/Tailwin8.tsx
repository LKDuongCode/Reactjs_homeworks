import React from "react";

export default function Tailwin8() {
  return (
    <div>
      <div className="flex gap-3 rounded-lg border-2 w-[500px]">
        <div className="size-14 rounded-lg bg-blue-400 flex justify-center items-center text-white">
          01
        </div>
        <div className="size-14 rounded-lg bg-blue-400 flex justify-center items-center text-white">
          02
        </div>
        <div className="size-14 rounded-lg bg-blue-400 flex justify-center items-center text-white">
          03
        </div>
      </div>
      <br />
      <div className="flex gap-3 rounded-lg border-2 w-[500px] justify-end">
        <div className="size-14 rounded-lg bg-blue-400 flex justify-center items-center text-white">
          01
        </div>
        <div className="size-14 rounded-lg bg-blue-400 flex justify-center items-center text-white">
          02
        </div>
        <div className="size-14 rounded-lg bg-blue-400 flex justify-center items-center text-white">
          03
        </div>
      </div>
      <br />
      <div className="flex gap-3 rounded-lg border-2 w-[500px] justify-between">
        <div className="size-14 rounded-lg bg-blue-400 flex justify-center items-center text-white">
          01
        </div>
        <div className="size-14 rounded-lg bg-blue-400 flex justify-center items-center text-white">
          02
        </div>
        <div className="size-14 rounded-lg bg-blue-400 flex justify-center items-center text-white">
          03
        </div>
      </div>
      <br />
      <div className="flex gap-3 rounded-lg border-2 w-[500px] justify-around">
        <div className="size-14 rounded-lg bg-blue-400 flex justify-center items-center text-white">
          01
        </div>
        <div className="size-14 rounded-lg bg-blue-400 flex justify-center items-center text-white">
          02
        </div>
        <div className="size-14 rounded-lg bg-blue-400 flex justify-center items-center text-white">
          03
        </div>
      </div>
    </div>
  );
}
