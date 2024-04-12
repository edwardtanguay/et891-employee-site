/* eslint-disable react/prop-types */

export const Employee = ({employee}) => {
	return (
		<div className="bg-slate-500 mb-3 p-3 rounded" key={employee.employeeID}>
			{employee.firstName} {employee.lastName}
		</div>
	);
};
