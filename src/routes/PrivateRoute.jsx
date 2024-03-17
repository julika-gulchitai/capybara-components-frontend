import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {selectIsLoggedIn, selectRefreshing} from '../redux/User/selectors';

const PrivateRoute = ({ component }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectRefreshing);
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to="/welcom" /> : component;
};

export default PrivateRoute;
