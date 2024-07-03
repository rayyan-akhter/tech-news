import React, { useContext, useEffect, useReducer } from "react";

import Reducer from "./reducer";

const initialState = {
  isLoading: true,
  query: "HTML",
  nbPages: 50,
  page: 0,
  hits: [],
};
let api = "https://hn.algolia.com/api/v1/search?";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const fetchApiData = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      dispatch({
        type: "GET_STORIES",
        payload: {
          hits: data.hits,
          nbPages: data.nbPages,
          page: data.page,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removePost = (id) => {
    dispatch({
      type: "REMOVE_POST",
      payload: id,
    });
  };

  const searchPost = (searchQuery) => {
    dispatch({
      type: "SEARCH_QUERY",
      payload: searchQuery,
    });
  };

  const getNextPage = () => {
    dispatch({
      type: "NEXT_PAGE",
    });
  };

  const getPrevPage = () => {
    let pageNum = state.page - 1;
    if(pageNum<=0){
        pageNum = 0;
    } 
    dispatch({
      type: "PREV_PAGE"
    });
  };

  useEffect(() => {
    fetchApiData(`${api}query=${state.query.toLowerCase()}&page=${state.page}`);
  }, [state.query,state.page]);

  return (
    <AppContext.Provider
      value={{ ...state, removePost, searchPost, getNextPage, getPrevPage }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };

