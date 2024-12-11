import React from "react";

export default function Sidebar() {
  return (
    <div className="bg-gray-800 text-white w-64 h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Kurser</h1>
      <ul>
        <li className="mb-2 cursor-pointer">Kurs 1</li>
        <li className="mb-2 cursor-pointer">Kurs 2</li>
        <li className="mb-2 cursor-pointer">Kurs 3</li>
      </ul>
    </div>
  );
}
