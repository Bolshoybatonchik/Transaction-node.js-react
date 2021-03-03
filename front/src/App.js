import React from "react";
import { Provider } from "react-redux";
import './App.css';
import {Redirect ,Route, BrowserRouter, Switch } from "react-router-dom";
import UsersContainer from "components/user/usersContainer";
import LoginContainer from "components/login/loginContainer";
import RegisterContainer from "components/register/registerContainer";
import store from "store/store";
import {getToken} from "localStorege/localStorege";



const renderPrivateRoute = (Component) => (params)  => {
    const token = getToken();
    if(token) {
        return <Component {...params}/>
    }
    return <Redirect to='/login'/>
}

const renderPublicRoute = (Component) => (params)  => {

    const token = getToken();
    if(!token) {
        return <Component {...params}/>
    }
    return <Redirect to='/'/>
}

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
