const INITIAL_STATE = {
  selected: [],
  isFetching: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return {
        ...state,
        selected: null,
        isFetching: true
      }
    break;
    case "FETCH_COMPLETED":
      return {
        ...state,
        selected: action.payload,
        isFetching: false
      }
      break;
  }

  return state;
}
