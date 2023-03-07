import React, { useState } from "react";
import EmployeeService from "../service/EmployeeService";
import {useNavigate} from "react-router-dom";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  const saveEmployee = (e) => {
    e.preventDefault();
    EmployeeService.saveEmployee(employee)
        .then((response) => {
          console.log(response);
          navigate("/employeeList");
        })
        .catch((error) => {
          console.log(error);
        });
  };

  const reset = (e) => {
    e.preventDefault();
    setEmployee({
      id: "",
      firstName: "",
      lastName: "",
      email: "",
    });
  };

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-6 py-6">
        <div className="font-thin text-2xl tracking">
          <h1>Add New Employee</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block">First Name</label>
          <input
            type="text"
            name="firstName"
            value={employee.firstName}
            onChange={(e) => handleChange(e)}
            className="w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-8">
          <label className="block">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={employee.lastName}
            onChange={(e) => handleChange(e)}
            className="w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-8">
          <label className="block">Email</label>
          <input
            type="email"
            name="email"
            value={employee.email}
            onChange={(e) => handleChange(e)}
            className="w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button onClick={saveEmployee}
              className="px-2 py-2 rounded text-white font-semibold bg-green-500 hover:bg-green-700">
            Save
          </button>
          <button onClick={reset}
              className="px-2 py-2 rounded text-white font-semibold bg-red-500 hover:bg-red-700"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
