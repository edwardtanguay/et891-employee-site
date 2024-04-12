/* eslint-disable react/prop-types */

export const Employee = ({employee}) => {
	return (
		<li key={employee.employeeID}>
			{employee.firstName} {employee.lastName}
		</li>
	);
};
