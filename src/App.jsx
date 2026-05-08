import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Rand/login";
import Signup from "./pages/Rand/Signup";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;