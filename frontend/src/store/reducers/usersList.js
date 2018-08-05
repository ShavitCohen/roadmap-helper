const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch ( action.type ) {
    case "SET_USERS":
      return action.payload
    break;
  }
  return state;
}
