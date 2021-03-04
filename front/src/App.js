import React from "react";
import {Provider} from "react-redux";
import './App.css';
import {Route, BrowserRouter, Switch} from "react-router-dom";
import UsersContainer from "components/user/usersContainer";
import LoginContainer from "components/login/loginContainer";
import RegisterContainer from "components/register/registerContainer";
import store from "store/store";
import renderPrivateRoute from "components/privetRoute/privetRoute";
import renderPublicRoute from "components/publicRoute/publicRoute";


function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="App">
                    <Switch>
                        <Route path='/' exact render={renderPrivateRoute(UsersContainer)}/>
                        <Route path='/login' exact render={renderPublicRoute(LoginContainer)}/>
                        <Route path='/register' exact render={renderPublicRoute(RegisterContainer)}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
