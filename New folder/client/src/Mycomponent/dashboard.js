import React,{useEffect, useState, useMemo } from 'react';
import Axios from 'axios';

const Dashboard = () => {
    const [employeeList, setEmployeeList] = useState([]);
    const getEmployees = () => {
        Axios.get("https://apnaorganicstore.in/index/employees").then((response) => {
          setEmployeeList(response.data);
          
        });
      };
      useEffect(() => {
        getEmployees();
      },[]);
    return (
        <div>
        {(employeeList || []).map((data) => {
            return (
                <p>{data.staff_name}</p>

            )

        })}
        </div>
    );
}

export default Dashboard;
