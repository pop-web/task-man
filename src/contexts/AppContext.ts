import { createContext } from "react";
type ContextType = {
  state: any;
  dispatch: any;
};
const AppContext = createContext({} as ContextType);

export default AppContext;
