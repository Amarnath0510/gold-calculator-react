import "./App.css";
import Dropdown from "./Dropdown.js";
import Golds from "./Golds.js";
import BitCoin from "./BitCoin.js";
import GoldCalculator from "./GoldCalculator.js";
import Home from "./Home.js";
import NotFound from "./NotFound.js";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";

import Button from "@mui/material/Button";

import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function App() {
  const [selected, setSelected] = useState(
    "Choose any one below to know 1gram gold price today"
  );
  const history = useHistory("");

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar variant="dense">
          <Button
            onClick={() => history.push("/")}
            variant="text"
            color="inherit"
          >
            Home
          </Button>
          <Button
            onClick={() => history.push("/golds")}
            variant="text"
            color="inherit"
          >
            Golds
          </Button>
          <Button
            onClick={() => history.push("/gold-calculator")}
            variant="text"
            color="inherit"
          >
            GOLD-CALCULATOR
          </Button>
          <Button
            onClick={() => history.push("/gold-rate-today")}
            variant="text"
            color="inherit"
          >
            GOLD-RATE-TODAY
          </Button>
          <Button
            onClick={() => history.push("/bitcoin")}
            variant="text"
            color="inherit"
          >
            BITCOIN
          </Button>
        </Toolbar>
      </AppBar>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/golds">
          <Golds />
        </Route>
        <Route path="/gold-calculator">
          <GoldCalculator />
        </Route>
        <Route path="/gold-rate-today">
          <Dropdown selected={selected} setSelected={setSelected} />
        </Route>
        <Route path="/bitcoin">
          <BitCoin />
        </Route>
        <Route path="/**">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
