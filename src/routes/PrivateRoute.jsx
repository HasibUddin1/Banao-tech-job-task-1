import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {

    const { user, isLoading } = useContext(AuthContext)

    if (user) {
        return children
    }

    if (isLoading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }

    return (
        <Navigate to='/login' replace>

        </Navigate>
    );
};

export default PrivateRoute;