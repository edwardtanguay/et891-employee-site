/* eslint-disable react/prop-types */

export const Employee = ({ employee }) => {
	return (
		<div
			className="bg-slate-500 mb-3 p-3 rounded w-full md:w-[30rem] flex gap-2"
			key={employee.employeeID}
		>
			<img
				className="w-[5rem] rounded"
				src={`images/employees/employee_${employee.employeeID}.jpg`}
			/>
			<div>
				<div className="font-semibold">
					{employee.firstName} {employee.lastName}
				</div>
				<div className="italic">{employee.title}</div>
			</div>
		</div>
	);
};
