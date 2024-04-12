import { useEffect } from "react";

const employeesUrl = "https://edwardtanguay.vercel.app/share/employees.json";

const employees = [];

function App() {
	useEffect(() => {
		(async () => {
			const response = await fetch(employeesUrl);
			const employees = await response.json();
			console.log(employees);
			console.log(`there are ${employees.length} employees`);
		})();
	}, []);

	return (
		<main>
			<h1 className="text-3xl text-orange-500 italic">Employee Site</h1>
			<p>There are {employees.length} employees.</p>
		</main>
	);
}

export default App;
