import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/User/selectors';

const PrivateRoute = ({ children }) => {
  const isLogedIn = useSelector(selectIsLoggedIn);

  return isLogedIn ? { children } : <Navigate to="/signin" />;
};

export default PrivateRoute;
