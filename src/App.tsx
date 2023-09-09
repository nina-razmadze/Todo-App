import "./App.css";
import Search from "../src/components/Search/Search";
import List from "./components/List/List";
import { SearchContext } from "./contexts/SearchContext";
import { SearchProvider } from "./Providers/SearchProvider";

export default function App() {
  return (
    <>
      <div>
        <SearchProvider>
          {/* <h1 className="text-2xl font-semibold mb-4">Todo List</h1> */}
          <Search />
          <List />
        </SearchProvider>
      </div>
    </>
  );
}
