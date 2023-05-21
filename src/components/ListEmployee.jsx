/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";
import Employee from "./Employee";

const ListEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  const addEmployee = () => {
    navigate("/add-employee/_add");
  };
  const editEmployee = (id) => {
    navigate(`/add-employee/${id}`);
  };

  const deleteEmployee = (id) => {
    EmployeeService.deleteEmployee(id).then((res) => {
      if (employees) {
        setEmployees((prevElement) => {
          return prevElement.filter((employee) => employee.id !== id);
        });
      }
    });
  };

  useEffect(() => {
    const fetchEmployees = async () => {
      const res = await EmployeeService.getEmployees();
      setEmployees(res.data);
      console.log(res.data);
    };
    fetchEmployees();
  }, []);
  return (
    <div className="">
      <h2 className="flex justify-center font-bold text-3xl text-blue-600 mt-2">
        Employee List
      </h2>
      <div className="rounded-md px-10 shadow">
        <button
          onClick={addEmployee}
          className="bg-blue-800 rounded-sm p-3 text-white font-semibold"
        >
          Add Employee
        </button>
      </div>
      <div className="mx-10">
        <table className="min-w-full">
          <thead className="shadow border-b bg-slate-300">
            <tr className="">
              <th className="text-left font-medium text-gray-600 uppercase py-2 px-2">
                First Name
              </th>
              <th className="text-left font-medium text-gray-600 uppercase">
                Last Name
              </th>
              <th className="text-left font-medium text-gray-600 uppercase">
                Email
              </th>
              <th className="bg-slate-400 px-2 rounded text-right uppercase text-gray-900 font-semibold">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {employees.map((employee) => (
              <Employee
                employee={employee}
                editEmployee={editEmployee}
                deleteEmployee={deleteEmployee}
                key={employee.id}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ListEmployee;
