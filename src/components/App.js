import { useReducer } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppContext from "../contexts/AppContext";
import reducer from "../reducers";
import Lists from "./Lists";
import Add from "./Add";
import AppBar from "./AppBar";
import { Container } from "@material-ui/core";

const App = () => {
  const [state, dispatch] = useReducer(reducer, { task: [] });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <AppBar />
      <Container>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Lists} />
            <Route exact path="/add" component={Add} />
          </Switch>
        </BrowserRouter>
      </Container>
    </AppContext.Provider>
  );
};

export default App;
