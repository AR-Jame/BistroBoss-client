import { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    console.log(location)
    const { user, loader } = useContext(AuthContext)
    if (loader) {
        <p>data is loading</p>
    }
    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to='/login' />

};
PrivateRoute.propTypes = {
    children: PropTypes.node,
}
export default PrivateRoute;