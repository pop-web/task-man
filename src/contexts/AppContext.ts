import { createContext } from "react";
type ContextType = {
  state: {
    auth: any;
    edit_task: { [key: string]: string };
    modal: boolean;
    tasks: { key: string }[];
  };
  dispatch: any;
};
const AppContext = createContext({} as ContextType);

export default AppContext;
