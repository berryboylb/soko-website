import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Home from './Components/Home';
import initFontAwesome from "./initFontAwesome";
initFontAwesome();

function App() {
  return (
<Router>
      <div className="App">
        <Switch>
            <Route exact path = "/">
                  <Home />
              </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
