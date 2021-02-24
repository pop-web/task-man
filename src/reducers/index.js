import { combineReducers } from "redux";

import modal from "./modal";
import tasks from "./tasks";

export default combineReducers({ modal, tasks });
