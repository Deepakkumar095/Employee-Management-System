import {} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import EmployeeList from "./component/EmployeeList";
import AddEmployee from "./component/AddEmployee";
import UpdateEmployee from "./component/UpdateEmployee";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar>
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/addEmployee" element={<AddEmployee />} />
          <Route path="/editEmployee/:id" element={<UpdateEmployee />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
