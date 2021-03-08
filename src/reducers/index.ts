import { combineReducers } from "redux";

import modal from "./modal";
import tasks from "./tasks";
import auth from "./auth";
import edit_task from "./edit_task";

export default combineReducers({ modal, tasks, auth,edit_task });
