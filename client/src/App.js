import logo from './logo.svg';
import './App.css';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Title} from "./components/Title";
import MainPage from "./pages/MainPage";
import CleanerPage from "./pages/CleanerPage";
import AdminPage from "./pages/AdminPage";
import { ClientOrderPage } from "./pages/ClientOrderPage";

function App() {
  return (
    <div className="App">
      <Title>
          Cleaning Elista
      </Title>
        <Router>
            <Switch>
                <Route path="/" exact={true}>
                    <MainPage />
                </Route>
                <Route path="/client/order/:id" component={ClientOrderPage} />
                <Route path="/cleaner">
                    <CleanerPage />
                </Route>
                <Route path="/admin">
                    <AdminPage />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
