import React from "react";

export default function App() {
  return (
    <div className=" min-h-screen flex justify-center items-center">
      <input
        className=" px-4 py-2  rounded-full ring-1 ring-gray-300"
        type="text"
      />
      <button className="px-4 py-2 rounded-full bg-slate-600 font-semibold text-white ">
        Add
      </button>
    </div>
  );
}
