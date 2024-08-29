
import './App.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Tv from './pages/Tv';
import Airtime from './pages/Airtime';
import Data from './pages/Data';
import Electric from './pages/Electric';
import History from './pages/History';
import Help from './pages/Help';
import Cash from './pages/Cash';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/airtime" element={<Airtime />} />
        <Route path="/data" element={<Data />} />
        <Route path="/electric" element={<Electric />} />
        <Route path="/transaction" element={<History />} />
        <Route path="/help" element={<Help />} />
        <Route path='/airtime-to-cash' element={<Cash />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
