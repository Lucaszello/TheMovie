import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./auth/Login";
// import Main from "./Layout";
import Home from "./componet";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* <Route  element={<Main/>}> */}
        <Route path="/" element={<Home />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
