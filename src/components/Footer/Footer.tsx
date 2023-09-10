import { useContext } from "react";
import { ListContext } from "../../contexts/ListContext";

export default function Footer() {
  const { list, setList } = useContext(ListContext);

  const deleteAllItems = () => {
    setList([]);
  };
  return (
    <div className="flex justify-between items-center mt-6">
      <div>Count</div>
      <button onClick={deleteAllItems}>delete All</button>
    </div>
  );
}
