import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const CreateEmployee = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const { firstName, lastName, email } = employee;

  const onSubmit = async (e) => {
    e.preventDefault();
    if (id === "_add") {
      await EmployeeService.createEmployee(employee);
      navigate("/");
    } else {
      await EmployeeService.updateEmployee(employee, id);
      navigate("/");
    }
  };

  useEffect(() => {
    if (id === "_add") {
      return;
    } else {
      const fetchData = async () => {
        try {
          const response = await EmployeeService.getEmployee(id);
          setEmployee(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }
  });

  const handleChange = (e) => {
    setEmployee((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const getTitle = () => {
    if (id === "_add") {
      return (
        <h2 className="text-center font-bold text-3xl mt-3 font-serif uppercase text-green-500">
          Add Employee
        </h2>
      );
    } else {
      return (
        <h2 className="text-center font-bold text-3xl mt-3 font-serif uppercase text-green-500">
          Update Employee
        </h2>
      );
    }
  };
  return (
    <main className="max-w-md mx-auto">
      {getTitle()}
      <form onSubmit={onSubmit}>
        <div className="flex flex-col p-6">
          <label className="uppercase font-semibold font-sans text-gray-600">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => handleChange(e)}
            className="w-full py-2 px-2 rounded shadow text-gray-500 bg-white text-lg border border-gray-300 focus:bg-white focus:border-gray-300 mb-3"
          />
          <label className="uppercase font-semibold font-sans text-gray-600">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => handleChange(e)}
            className="w-full py-2 px-2 rounded shadow text-gray-500 bg-white text-lg border border-gray-300 focus:bg-white focus:border-gray-300 mb-3"
          />
          <label className="uppercase font-semibold font-sans text-gray-600">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => handleChange(e)}
            className="w-full py-2 px-2 rounded shadow text-gray-500 bg-white text-lg border border-gray-300 focus:bg-white focus:border-none mb-3"
          />
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-blue-700 text-white p-1.5 rounded"
            >
              Submit
            </button>
            <button
              onClick={() => navigate("/")}
              type="reset"
              className="bg-red-500 rounded p-1.5 text-white"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </main>
  );
};
export default CreateEmployee;
