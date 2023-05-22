import * as at from "../actions/actionTypes";

// REDUCER;
const allEmployers = (state = [], action) => {
  switch (action.type) {
    case at.FETCH_ALL_EMPLOYERS:
      return action.payload;
    case at.ADD_EMPLOYER:
      return [...state, action.payload]
    case at.DELETE_EMPLOYER:
      return state.filter(employer => employer.id!==action.payload);
    case at.EDIT_EMPLOYER:
      return state.map(employer => { 
        return (
          employer.id===action.payload.id ? action.payload : employer
        );
      });
    default:
      return state;
  }
};

export default allEmployers;