import Login from './Login';
import Register from './Register';
import Library from './Library';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/library" element={<Library />} />
    </Routes>
  );
}

export default App;
