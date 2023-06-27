import Login from './screens/Login'
import Home from "./screens/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

function App() {
  return (
    <Router>
      {/* <Home/> */}
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
