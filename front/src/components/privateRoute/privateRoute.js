import {Redirect} from "react-router-dom";
import {getToken} from "utils/localStorage";


const renderPrivateRoute = (Component) => (params)  => {

    console.log('@@@renderPrivateRoute======.>>>>>>>>>>>1',params);
    const token = getToken();
    if(token) {
        return <Component {...params}/>
    }
    return <Redirect to='/login'/>
}

export default renderPrivateRoute;