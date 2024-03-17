import {Navigate, Route, Routes} from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import {AppWrapper} from './App.styled';
import {useDispatch, useSelector} from 'react-redux';
import {selectIsLoggedIn, selectRefreshing} from './redux/User/selectors.js';
import {lazy, useEffect} from 'react';
import {getCurrentThunk} from './redux/User/UserThunks.js';
import GuestRoute from './routes/GuestRoute.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';

const test = import.meta.env.VITE_API_TEST;

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectRefreshing);
  /*const isLoading = useSelector(selectIsLoading);*/
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(getCurrentThunk());
  }, [dispatch]);

  const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage.jsx'));
  const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
  const SignIn = lazy(() => import('./pages/SignIn/SignIn.jsx'));
  const SignUp = lazy(() => import('./pages/SignUp/SignUp.jsx'));

  return isRefreshing ? (
    /*<Loader visible={isLoading}/>*/
    <p>Loading...</p>
  ) : (

    <AppWrapper>
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
          {/*   <Route index element={<Navigate to={isLoggedIn ? '/home' : '/welcome'}/>}/>*/}
          <Route path='/welcome' element={<GuestRoute component={<WelcomePage/>}/>}/>
          <Route path='/home' element={<PrivateRoute component={<HomePage/>}/>}/>
          <Route path='/signup' element={<GuestRoute component={<SignUp/>}/>}/>
          <Route path='/signin' element={<GuestRoute component={<SignIn/>}/>}/>
          <Route path='*' element={<Navigate to='/welcome'/>}/>
        </Route>
      </Routes>
    </AppWrapper>
  );
}

export default App;
