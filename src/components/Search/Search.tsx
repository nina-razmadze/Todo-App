import { useState } from "react";

export default function CustomSearch() {
  const [todo, setTodo] = useState();

  const handleInputChange = (event: any) => {
    event.preventdefault();
    setTodo(event.target.value);
    console.log(todo);
  };
  return (
    <form className="w-[530px]">
      <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 bg-customPrimary rounded-lg focus:border-red-500 focus:ring focus:ring-customPrimary focus:outline-none"
          placeholder="Search Mockups, Logos..."
          required
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 hover:bg-customPrimary focus:border-red-500 focus:ring focus:ring-customPrimary font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 hover:border-red-600 focus:outline-none"
        >
          Search
        </button>
      </div>
    </form>
  );
}
