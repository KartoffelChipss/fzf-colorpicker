import './app.scss'
import {Route, Switch} from "wouter";
import Main from "./components/pages/Main/Main.tsx";
import PageNotFound from "./components/pages/PageNotFound/PageNotFound.tsx";

export function App() {
    return (
        <Switch>
            <Route path={"/"}>
                <Main />
            </Route>
            <Route path={"*"}>
                <PageNotFound />
            </Route>
        </Switch>
    )
}
