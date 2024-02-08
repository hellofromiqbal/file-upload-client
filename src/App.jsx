import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter as Router
import NewBook from './pages/newBook/NewBook';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <Router> {/* Wrap your entire application with Router */}
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/books/new' element={<NewBook/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
