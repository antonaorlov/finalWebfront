import { FETCH_EMPLOYER} from "../actions/actionTypes";

const initialState = {
  tasks: [],
};

const Employer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMPLOYER:
      return action.payload;
    default:
      return state;
  }
};

export default Employer;