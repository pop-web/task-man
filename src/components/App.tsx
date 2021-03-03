import { useReducer } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppContext from "../contexts/AppContext";
import reducer from "../reducers";
import Lists from "./Lists";
import Login from "./Login";
import AppBar from "./AppBar";
import CopyRight from "./CopyRight";
import { Container } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../theme";

const App:React.FC = () => {
  const initialState = {
    modal: false,
    tasks: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={{ state, dispatch }}>
        <AppBar />
        <Container>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Lists} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </BrowserRouter>
        </Container>
        <CopyRight />
      </AppContext.Provider>
    </ThemeProvider>
  );
};

export default App;
