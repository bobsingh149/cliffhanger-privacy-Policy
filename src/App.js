import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivacyPolicy from './components/PrivacyPolicy';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<PrivacyPolicy />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
