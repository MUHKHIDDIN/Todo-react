import React from "react";

export const Card = ({ name, id, onDelete, onEdit }) => {
  return (
    <div className="w-full max-w-md mx-auto my-4 flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-xl">
      <div className="flex flex-col">
        <p className="text-xl font-semibold text-gray-800">{name}</p>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={() => onDelete(id)}
          className="rounded-lg bg-red-500 px-4 py-2 text-white shadow-md transition-colors duration-300 ease-in-out hover:bg-red-600"
        >
          Delete
        </button>
        <button
          onClick={() => onEdit(id)}
          className="rounded-lg bg-green-500 px-4 py-2 text-white shadow-md transition-colors duration-300 ease-in-out hover:bg-green-600"
        >
          Edit
        </button>
      </div>
    </div>
  );
};
