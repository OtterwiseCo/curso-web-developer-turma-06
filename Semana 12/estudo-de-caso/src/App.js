import { Route, Routes } from "react-router-dom";
import CarCreate from "./routes/CarCreate";
import CarEdit from "./routes/CarEdit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="car/create" element={<CarCreate />} />
        <Route path="car/edit/:id" element={<CarEdit />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
