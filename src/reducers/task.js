import { CREATE_TASK } from "../actions";

const tasks = (state = [], action) => {
  switch (action.type) {
    case CREATE_TASK:
      const event = { title: action.title, detail: action.detail };
      const length = state.length;
      const id = length === 0 ? 1 : state[length - 1].id + 1;
      return [...state, { id, ...event }];
    default:
      return state;
  }
};

export default tasks;
