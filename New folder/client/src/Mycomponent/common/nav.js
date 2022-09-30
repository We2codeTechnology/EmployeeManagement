import React from "react";
import { Route, Routes } from "react-router-dom";
import Salarylist from "../salary";


function Navv(props) {

  return (
    <div>
      <Routes>

<>

<Route path="/EmployeeManagement/" element={<Salarylist/>} />
     


</>

      </Routes>
    </div>
  );
}

export default Navv;