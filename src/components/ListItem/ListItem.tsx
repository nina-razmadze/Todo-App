import { useContext } from "react";
import { ListContext } from "../../contexts/ListContext";

export default function ListItem({ item }: any) {
  const { list, setList } = useContext(ListContext);

  const handleDelete = () => {
    setList((prevState) => prevState.filter((index) => index !== index));
  };

  return (
    <li className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <input type="checkbox" className="w-5 h-5" />
        <span className="line-through">{item}</span>
      </div>

      <button
        className="text-red-500 hover:text-red-700"
        onClick={handleDelete}
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
    </li>
  );
}
