import { Navigate, Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { AppWrapper } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectRefreshing } from './redux/User/selectors.js';
import { lazy, useEffect, useState } from 'react';
import { getCurrentThunk } from './redux/User/UserThunks.js';
import GuestRoute from './routes/GuestRoute.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';
import ResetPassword from './pages/ResetPassword/ResetPassword.jsx';
import { Loader } from './components/Loader/Loader.jsx';
import { selectIsLoading } from './redux/global/selectors.js';
import ThemeComponent from './components/ThemeComponent/ThemeComponent.jsx';

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectRefreshing);
  const isLoading = useSelector(selectIsLoading);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    dispatch(getCurrentThunk());
  }, [dispatch]);

  const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage.jsx'));
  const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
  const SignIn = lazy(() => import('./pages/SignIn/SignIn.jsx'));
  const SignUp = lazy(() => import('./pages/SignUp/SignUp.jsx'));
  const ForgotPassword = lazy(() => import('./pages/ForgotPassword/ForgotPassword.jsx'));

  return isRefreshing ? (
    <Loader visible={isLoading} />
  ) : (

    <ThemeComponent isDark={isDark}>
      <AppWrapper>
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<Navigate to={isLoggedIn ? '/home' : '/welcome'} />} />
            <Route path='/welcome' element={<GuestRoute component={<WelcomePage setTheme={setIsDark} />} />} />
            <Route path='/home' element={<PrivateRoute component={<HomePage />} />} />
            <Route path='/signup' element={<GuestRoute component={<SignUp />} />} />
            <Route path='/signin' element={<GuestRoute component={<SignIn />} />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
            <Route path='/reset-password' element={<ResetPassword />} />
            <Route path='*' element={<Navigate to='/welcome' />} />
          </Route>
        </Routes>
      </AppWrapper>
      <Loader visible={isLoading} />
    </ThemeComponent>
  );
}

export default App;
