import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ROUTES } from './constans/routes';
import { Browse, Home, SignIn, SignUp } from './pages';



export default function App() {
    return (
        <Router>
            <Route exact path={ROUTES.home}>
                <Home />
            </Route>
            <Route path={ROUTES.browse}>
                <Browse />
            </Route>
            <Route path={ROUTES.signIn}>
                <SignIn />
            </Route>
            <Route path={ROUTES.signUp}>
                <SignUp />
            </Route>
        </Router>
    );
}