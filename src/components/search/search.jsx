import React from "react";
import { useGlobalContext } from "../../context";

const Search = () => {
  const { query, searchPost } = useGlobalContext();
  return (
    <>
      <h1>Tech News</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <input
            type="text"
            placeholder="search here"
            onChange={(e) => searchPost(e.target.value)}
            value={query}
          />
        </div>
      </form>
    </>
  );
};
export default Search;
