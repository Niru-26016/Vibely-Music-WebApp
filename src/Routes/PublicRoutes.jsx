import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthUserContext } from '../context/AuthContextApi';

const PublicRoutes = ({children}) => {
  let { authUser } = useContext(AuthUserContext);
//   ! this for login , register and forgot password

if (authUser != null){
    return <Navigate  to={"/user/profile"} />
}
else{
   return <>{children}</>


}

}

export default PublicRoutes