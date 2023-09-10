import { useContext } from "react";
import { ListContext } from "../../contexts/ListContext";

export default function Footer() {
  const { list, setList } = useContext(ListContext);

  const deleteAllItems = () => {
    setList([]);
  };
  return (
    <div className="flex justify-between items-center mt-6 bg-customPrimary  ">
      <button className="bg-SecondPrimary hover:border-red-600  hover:bg-customPrimary">
        Count
      </button>
      <button
        onClick={deleteAllItems}
        className="bg-customPrimary hover:border-red-600"
      >
        delete All
      </button>
    </div>
  );
}
