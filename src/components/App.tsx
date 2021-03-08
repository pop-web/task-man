import { useReducer } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppContext from "../contexts/AppContext";
import reducer from "../reducers";
import Lists from "./Lists";
import Login from "./Login";
import CopyRight from "./CopyRight";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../theme";

const App: React.FC = () => {
  const initialState = {
    modal: false,
    auth: {},
    tasks: [],
    edit_task: {},
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Lists} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </BrowserRouter>
        <CopyRight />
      </AppContext.Provider>
    </ThemeProvider>
  );
};

export default App;
