import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation()
    
    if (loading) {
        return <p>Please wait...</p>
    }

    if (user.uid) {
        return children
    }


    return <Navigate state={{from:location}} replace></Navigate>
};

export default PrivateRoute;