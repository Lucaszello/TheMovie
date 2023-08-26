import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./auth/Login";
import Main from "./Layout";
import Home from "./componet";
import Detail from "./componet/detail/Detail";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route   element={<Main/>}>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
