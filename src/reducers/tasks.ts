import { READ_TASKS } from "../actions";

const tasks = (state = [], action: any) => {
  switch (action.type) {
    case READ_TASKS:
      return action.tasks;
    default:
      return state;
  }
};

export default tasks;
