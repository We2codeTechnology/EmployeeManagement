import React from "react";
import { Route, Routes } from "react-router-dom";
import Generatesalary from "../Generatesalary";
import Salarylist from "../salary";


function Navv(props) {

  return (
    <div>
      <Routes>

<>

<Route path="/EmployeeManagement/" element={<Salarylist/>} />
<Route path="/EmployeeManagement/GenerateSalary" element={<Generatesalary/>} />
     


</>

      </Routes>
    </div>
  );
}

export default Navv;