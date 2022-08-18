import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import NotFound from './Components/NotFound';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;