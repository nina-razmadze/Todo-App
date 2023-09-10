import "./App.css";
import Search from "../src/components/Search/Search";
import List from "./components/List/List";
import { ListProvider } from "./Providers/ListProvider";

export default function App() {
  return (
    <>
      <div>
        <ListProvider>
          {/* <h1 className="text-2xl font-semibold mb-4">Todo List</h1> */}
          <Search />
          <List />
        </ListProvider>
      </div>
    </>
  );
}
