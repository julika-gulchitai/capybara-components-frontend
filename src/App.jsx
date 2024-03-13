import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import HomePage from './pages/HomePage/HomePage';
import HalfPage from 'pages/HalfPage/HalfPage';
import { AppWrapper } from './App.styled';
// import DailyNormaModal from './components/DailyNormaModal/DailyNormaModal';
// import DailyNorma from './components/DailyNorma/DailyNorma';

const test = import.meta.env.VITE_API_TEST;

function App() {
  console.log(test);
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/first" element={<WelcomePage />} />
          <Route path="/second" element={<HomePage />}>
            <Route path=":half" element={<HalfPage />} />
          </Route>
          <Route path="*" element={<WelcomePage />} />
        </Route>
      </Routes>
    </AppWrapper>
  );
}
export default App;
