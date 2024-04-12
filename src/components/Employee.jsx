/* eslint-disable react/prop-types */
export const Employee = (props) => {
	return (
		<li key={props.employee.employeeID}>
			{props.employee.firstName} {props.employee.lastName}
		</li>
	);
};
