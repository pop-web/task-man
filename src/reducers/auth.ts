import { LOGIN } from "../actions";

const auth = (state={}, action:any) => {
  switch (action.type) {
    case LOGIN:
      return action.user
    default:
      return state;
  }
};

export default auth;