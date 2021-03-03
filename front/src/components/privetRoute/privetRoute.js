// import Route from "react-router-dom";
import {Redirect} from "react-router-dom";
import {getToken} from "localStorege/localStorege";

const renderPrivateRoute = (Component) => (params)  => {
    const token = getToken();
    if(token) {
        return <Component {...params}/>
    }
    return <Redirect to='/login'/>
}

export default renderPrivateRoute;