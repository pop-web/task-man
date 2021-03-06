import { combineReducers } from "redux";

import modal from "./modal";
import tasks from "./tasks";
import auth from "./auth";

export default combineReducers({ modal, tasks, auth });
