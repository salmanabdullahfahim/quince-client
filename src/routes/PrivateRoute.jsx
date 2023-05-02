import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div className='mx-auto text-center mt-12 mb-32'>
            <div className="radial-progress" style={{ "--value": 90 }}>90%</div>
        </div>
    }
    if (user) {
        return children;
    }
    return (<Navigate to='/login'></Navigate>);
};

export default PrivateRoute;