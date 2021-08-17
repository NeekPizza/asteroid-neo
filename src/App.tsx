import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, CssBaseline } from "@material-ui/core";
import ThemeProvider from "@material-ui/styles/ThemeProvider";

import darkTheme from "theme";
import Navigation from "components/Navigation";
import Home from "components/Home";
import Browse from "components/Browse";
import Individual from "components/Individual";

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <CssBaseline />
        <Container>
          <Navigation />
          <Switch>
            <Route path='/neo/:id'>
              <Individual />
            </Route>
            <Route path='/neo'>
              <Browse />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

function About() {
  return <h2>About</h2>;
}
