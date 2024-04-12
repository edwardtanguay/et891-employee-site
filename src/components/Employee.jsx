/* eslint-disable react/prop-types */

export const Employee = ({employee}) => {
	return (
		<div className="bg-slate-500 mb-3 p-3 rounded w-full md:w-[30rem]" key={employee.employeeID}>
			<img className="w-[5rem] rounded" src={`images/employees/employee_${employee.employeeID}.jpg`}/>
			{employee.firstName} {employee.lastName}
		</div>
	);
};
