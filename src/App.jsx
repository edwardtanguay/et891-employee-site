import { useEffect, useState } from "react";

const employeesUrl = "https://edwardtanguay.vercel.app/share/employees.json";

function App() {
	const [employees, setEmployees] = useState([]);

	useEffect(() => {
		setTimeout(async () => {
			const response = await fetch(employeesUrl);
			const _employees = await response.json();
			setEmployees(_employees); // start saving employees to the state variable
		}, 1000);
	}, []);

	return (
		<main>
			<h1 className="text-3xl text-orange-500 italic">Employee Site</h1>
			<p>There are {employees.length} employees.</p>
      <ul>
        {employees.map(employee => {
          return (
            <li key={employee.employeeID}>{employee.firstName} {employee.lastName}</li>
          )
        })}
      </ul>
		</main>
	);
}

export default App;
