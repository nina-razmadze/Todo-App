import "./App.css";
import Search from "../src/components/Search/Search";
import List from "./components/List/List";
import { ListProvider } from "./Providers/ListProvider";
import ValueProvider from "./Providers/ValueProvider";

export default function App() {
  return (
    <>
      <div>
        <ListProvider>
          <ValueProvider>
            {/* <h1 className="text-2xl font-semibold mb-4">Todo List</h1> */}
            <div className="max-h-[300px] overflow-auto">
              <Search />
              <List />
            </div>
          </ValueProvider>
        </ListProvider>
      </div>
    </>
  );
}
