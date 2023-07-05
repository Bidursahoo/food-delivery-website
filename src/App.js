import Login from "./screens/Login";
import Home from "./screens/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./screens/SignUp";
import { CardProvider } from "./components/ContextReducer";

function App() {
  return (
    <CardProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </Router>
    </CardProvider>
  );
}

export default App;
