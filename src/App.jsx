import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import HomePage from './pages/HomePage/HomePage';

import { AppWrapper } from './App.styled';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';

const test = import.meta.env.VITE_API_TEST;

function App() {
  console.log(test);
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/register" element={<SignUp />} />
          <Route path="/sign_in" element={<SignIn />}></Route>
          <Route path="*" element={<WelcomePage />} />
        </Route>
      </Routes>
    </AppWrapper>
  );
}
export default App;
