import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const Home = lazy(() => import("./Fib"));
const OtherPage = lazy(() => import("./OtherPage"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <div className="App">
            <header className="App-header">
              <Link to="/">Home</Link>
              <Link to="/otherpage">Other Page</Link>
            </header>
            <div>
              <Route exact path="/" component={Home} />
              <Route path="/otherpage" component={OtherPage} />
            </div>
          </div>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
