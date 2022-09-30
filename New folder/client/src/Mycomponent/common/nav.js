import React from "react";
import { Route, Routes } from "react-router-dom";
import Salarylist from "../salary";
import Dashboard from "../dashboard";


function Navv(props) {

  return (
    <div>
      <Routes>

<>

<Route path="/EmployeeManagement/" element={<Dashboard/>} />
     
      <Route path="/EmployeeManagement/Salary_list" element={<Salarylist />} />


</>

      </Routes>
    </div>
  );
}

export default Navv;