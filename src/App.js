import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { PageFirst } from './pages/PageFirst';
import { PageGame } from './pages/PageGame';

function App() {
  return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageFirst/>} />
          <Route path="/play" element={<PageGame/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;