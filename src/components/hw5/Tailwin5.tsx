import React from "react";

export default function Tailwin5() {
  return (
    <div className="bg-blue-200 rounded-lg size-80 flex justify-center items-center">
      <div className="relative size-4/5 bg-blue-400 rounded-lg p-3">
        <p className="pl-3 pt-3">Relative parent</p>
        <div className="absolute bottom-0 left-0 bg-blue-700 text-blue-50 p-3 rounded-lg">
          <p>Absolute child</p>
        </div>
      </div>
      <br />
    </div>
  );
}
