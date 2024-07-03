import "./App.css";
import Pagination from "./components/pagination/pagination";
import Search from "./components/search/search";
import Stories from "./components/stories/stories";

function App() {
  return (
    <>
      <Search />
      <Pagination />
      <Stories />
    </>
  );
}

export default App;
