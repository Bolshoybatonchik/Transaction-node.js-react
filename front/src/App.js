import React from "react";
import './App.css';
import {Redirect ,Route, BrowserRouter, Switch } from "react-router-dom";
import UsersContainer from "./Component/user/UsersContainer/usersContainer";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./store/Reducer/reducer";
import { Provider } from "react-redux";
import LoginContainer from "./Component/Login/loginContainer/loginContainer";
import RegisterContainer from "./Component/Register/RegisterContainer/registerContainer";
import { getToken } from "./localStoreg/localStoreg";

const store = createStore(reducer, applyMiddleware(thunk));

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
                        <Route path='/login' exact render={renderPublicRoute(LoginContainer)}/>
                        <Route path='/register' exact render={renderPublicRoute(RegisterContainer)}/>
                        <Route path='/' exact render={renderPrivateRoute(UsersContainer)}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
