
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../customHooks/useAuth';

const ProtectedRoute = ({children}) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    //console.log(location);
    if(loading){
        // return <div className='min-h-32 w-full flex justify-center'><span className="loading loading-spinner loading-lg"></span></div>
        return <div className='min-h-32 w-full flex justify-center'><span className="loading loading-lg"></span></div>
    }
    else if(user){
        return children;
    }
    else{
        return <Navigate to={'/login'}  state={{ from: location }}></Navigate>
    }
};

export default ProtectedRoute;