import { EDIT_TASK, DONE_EDIT_TASK } from "../actions";

const edit_task = (state = {}, action: any) => {
  switch (action.type) {
    case EDIT_TASK:
      return action.task;
    case DONE_EDIT_TASK:
      return {};
    default:
      return state;
  }
};

export default edit_task;
