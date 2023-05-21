/* eslint-disable react/prop-types */
const Employee = ({ employee, editEmployee, deleteEmployee }) => {
  return (
    <tr key={employee.id} className="border-b border-slate-100">
      <td className=" text-gray-600 whitespace-nowrap text-left py-2">
        {employee.firstName}
      </td>
      <td className="text-gray-600 border-slate-300 whitespace-nowrap py-2">
        {employee.lastName}
      </td>
      <td className="text-gray-600 border-slate-300 py-2">{employee.email}</td>
      <td className="text-right">
        <button
          onClick={() => editEmployee(employee.id)}
          className="bg-green-400 text-sm text-white px-2 py-1 rounded"
        >
          Update
        </button>{" "}
        <button
          onClick={() => deleteEmployee(employee.id)}
          className="bg-red-400 text-sm text-white px-2 py-1 rounded"
        >
          Delete
        </button>{" "}
      </td>
    </tr>
  );
};
export default Employee;
