import Login from "./screens/Login";
import Home from "./screens/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./screens/SignUp";
import { CardProvider } from "./components/ContextReducer";
import Cart from "./screens/Cart";

function App() {
  return (
    <CardProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/cart" element={<Cart/>}/>
          </Routes>
        </div>
      </Router>
    </CardProvider>
  );
}

export default App;
