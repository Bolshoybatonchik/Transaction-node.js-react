import './App.css';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import UsersContainer from "./Component/user/UsersContainer/usersContainer";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./store/Reducer/reducer";
import { Provider } from "react-redux";
import LoginContainer from "./Component/Login/loginContainer/loginContainer";
import RegisterContainer from "./Component/Register/RegisterContainer/registerContainer";
import React from "react";


const store = createStore(reducer, applyMiddleware(thunk));

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="App">
                    <Switch>
                        <Route path={'/login'} component={LoginContainer}/>
                        <Route path={'/register'} component={RegisterContainer}/>
                        <Route path={'/'} component={UsersContainer}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
