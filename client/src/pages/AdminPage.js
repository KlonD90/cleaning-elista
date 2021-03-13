import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import {Title} from "../components/Title";
import AdminLogin from "./AdminLogin";

export default () => {
    return (
    <div>
        <Title>Admin Page</Title>
        <Router>
            <Switch>
                <Route path="/admin/login">
                    <AdminLogin />
                </Route>
            </Switch>
        </Router>
    </div>
    );
}
