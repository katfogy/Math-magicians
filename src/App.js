import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quotes from './components/quotes';
import Home from './components/Home';
import NavMenu from './components/NavMenu';
import './components/Calculator.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <>
          <NavMenu />
          <Routes>
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/quotes" element={<Quotes />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </>
      </BrowserRouter>
    </div>
  );
}

export default App;
