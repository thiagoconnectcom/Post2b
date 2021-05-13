import React, {lazy, Suspense} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//pages
const Home = lazy(() => import('./pages/Home'));
const Kanban = lazy(() => import('./pages/Kaban'))

export default function Routes() {
  return (
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/panel/:id" component={Kanban}/>
            </Switch>
        </Suspense>
    </Router>
  )
}