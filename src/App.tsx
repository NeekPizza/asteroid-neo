import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, CssBaseline } from "@material-ui/core";
import ThemeProvider from "@material-ui/styles/ThemeProvider";

import darkTheme from "theme";
import Home from "components/Home";

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <CssBaseline />
        <Container>
          <Switch>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </Container>
      </Router>
    </ThemeProvider>
  );
}
