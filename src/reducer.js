const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_STORIES":
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
        page: action.payload.page
      };
    case "REMOVE_POST":
      return {
        ...state,
        hits: state.hits.filter(
          (currentElm) => currentElm.objectID !== action.payload
        ),
      };
    case "SEARCH_QUERY":
      return {
        ...state,
        query: action.payload,
      };
    case "NEXT_PAGE":
        let pageNumInc = state.page + 1;
        if(pageNumInc >= state.nbPages){
            pageNumInc = state.page;
        }
      return {
        ...state,
        page: pageNumInc,
      };
    case "PREV_PAGE":
        let pageNum = state.page - 1;
        if(pageNum<=0){
            pageNum = 0;
        } 
      return {
        ...state,
        page: pageNum,
      };
  }
  return state;
};
export default Reducer;
