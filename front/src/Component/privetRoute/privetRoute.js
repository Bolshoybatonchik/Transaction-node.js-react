import Route from "react-router-dom";
import Redirect from "react-router-dom";

function PrivateRoute ({ children, ...rest }) {
    return (
        <Route {...rest} render={() => {
            return props.Auth === true
                ? children
                : <Redirect to='/login' />
        }} />
    )
}
