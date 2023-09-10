import classNames from "classnames";
import { useState } from "react";

export default function ListItem({ item, onRemove }: any) {
  const [chechkbox, setCheckBox] = useState(false);

  return (
    <li className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          className="w-5 h-5"
          onClick={() => setCheckBox(true)}
        />
        <span
          className={classNames({ "line-through": chechkbox ? true : false })}
        >
          {item}
        </span>
      </div>
      <div className="flex justify-between w-[150px]">
        <button className="px-3 py-2 bg-red-500 text-black hover:bg-red-600 hover:text-white rounded-md transition duration-300 ease-in-out">
          Edit
        </button>
        <button
          className="text-red-500 hover:text-red-700"
          onClick={() => onRemove(item)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path d="M6 18L18 6M6 6l12 12" />
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </li>
  );
}
