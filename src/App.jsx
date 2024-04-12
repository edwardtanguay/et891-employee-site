import { useEffect, useState } from "react";
import { ImSpinner9 } from "react-icons/im";

const employeesUrl = "https://edwardtanguay.vercel.app/share/employees.json";

function App() {
	const [employees, setEmployees] = useState([]);

	useEffect(() => {
		setTimeout(async () => {
			const response = await fetch(employeesUrl);
			const _employees = await response.json();
			setEmployees(_employees); // start saving employees to the state variable
		}, 3000);
	}, []);

	return (
		<main>
			<h1 className="text-3xl text-orange-500 italic mb-3">
				Employee Site
			</h1>
			{employees.length === 0 ? (
				<p><ImSpinner9 class="animate-spin text-3xl text-yellow-300"/></p>
			) : (
				<>
					<p className="mb-3">
						There are {employees.length} employees.
					</p>
					<ul>
						{employees.map((employee) => {
							return (
								<li key={employee.employeeID}>
									{employee.firstName} {employee.lastName}
								</li>
							);
						})}
					</ul>
				</>
			)}
		</main>
	);
}

export default App;
