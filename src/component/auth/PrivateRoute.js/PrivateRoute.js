import { Navigate } from 'react-router-dom';
export default function PrivateRoute({children}) {
  const token= localStorage.getItem('accessToken');
  if(!token){
    return <Navigate to="/login" />
  }
  else{
     return children;
  }

}