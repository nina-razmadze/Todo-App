export default function ListItem() {
  return (
    <li className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <input type="checkbox" className="w-5 h-5" />
        <span className="line-through">Complete task 1</span>
      </div>

      <button className="text-red-500 hover:text-red-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </li>
  );
}
