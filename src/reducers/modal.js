import { MODAL_OPEN, MODAL_CLOSE } from "../actions";

const modal = (state = false, action) => {
  switch (action.type) {
    case MODAL_OPEN:
      return true;
    case MODAL_CLOSE:
      return false;
    default:
      return state;
  }
};

export default modal;
