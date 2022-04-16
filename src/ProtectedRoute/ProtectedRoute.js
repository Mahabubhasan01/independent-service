import React from 'react';
import { auth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
const ProtectedRoute = ({children}) => {
    const [user] = useAuthState(auth);
    const location = useLocation()
    
        if(user){
            return children
        }
        else{
            <Navigate to='/login' state={{from:location}} replace></Navigate>
        }
    
};

export default ProtectedRoute;