import { useReducer } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppContext from "../contexts/AppContext";
import reducer from "../reducers";
import index from "./Index";
import add from "./Add";
import { Container } from "react-bootstrap";

const App = () => {
  const [state, dispatch] = useReducer(reducer, { task: [] });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Container className="py-5">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={index} />
            <Route exact path="/add" component={add} />
          </Switch>
        </BrowserRouter>
      </Container>
    </AppContext.Provider>
  );
};

export default App;
