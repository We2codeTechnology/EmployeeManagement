import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Salary_list from "../salary";

import { useNavigate } from "react-router-dom";

import Dashboard from "../dashboard";


function Navv(props) {

  return (
    <div>
      <Routes>

<>

<Route path="/" element={<Dashboard/>} />
     
      <Route path="/Salary_list" element={<Salary_list />} />


</>

      </Routes>
    </div>
  );
}

export default Navv;