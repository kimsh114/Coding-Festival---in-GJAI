import { Route, Routes } from '../node_modules/react-router-dom/index';
import './App.css';
import NewsPages from './pages/NewsPages';

function App() {
  return (
    <Routes>
      <Route path='/' element={<NewsPages />} />
      <Route path='/:category' element={<NewsPages />} />
    </Routes>
  );
}

export default App;
