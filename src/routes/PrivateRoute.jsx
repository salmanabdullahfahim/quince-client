import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    const location = useLocation();

    if (loading) {
        return <div className='mx-auto text-center mt-12 mb-32'>
            <div className="radial-progress" style={{ "--value": 90 }}>90%</div>
        </div>
    }
    if (user) {
        return children;
    }
    return (<Navigate state={{from: location}} to='/login' replace></Navigate>);
};

export default PrivateRoute;