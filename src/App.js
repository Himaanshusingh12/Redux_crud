import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Home from "./Features/Pages/Home";
import 'react-toastify/dist/ReactToastify.css';
import Add_user from "./Features/Pages/Add_user";


function App() {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer></ToastContainer>
        <Routes>
          <Route path="/" element={<><Home /></>}></Route>
          <Route path="/add_user" element={<><Add_user /></>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
