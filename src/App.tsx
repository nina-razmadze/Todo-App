import "./App.css";
import Search from "../src/components/Search/Search";
import List from "./components/List/List";
import { ListProvider } from "./Providers/ListProvider";
import ValueProvider from "./Providers/ValueProvider";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <div>
        <ListProvider>
          <ValueProvider>
            {/* <h1 className="text-2xl font-semibold mb-4">Todo List</h1> */}
            <Search />
            <div className="max-h-[300px] h-[300px] overflow-auto bg-customPrimary mt-6">
              <List />
            </div>
            <Footer />
          </ValueProvider>
        </ListProvider>
      </div>
    </>
  );
}
