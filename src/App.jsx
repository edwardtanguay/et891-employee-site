import { useEffect, useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import { Header } from "./components/Header";
import { Employee } from "./components/Employee";

const employeesUrl = "https://edwardtanguay.vercel.app/share/employees.json";

function App() {
	const [originalEmployees, setOriginalEmployees] = useState([]);
	const [filteredEmployees, setFilteredEmployees] = useState([]);
	// const [employees, setEmployees] = useState([]);
	const [searchText, setSearchText] = useState("");

	useEffect(() => {
		setTimeout(async () => {
			const response = await fetch(employeesUrl);
			const _employees = await response.json();
			setOriginalEmployees(_employees);
			setFilteredEmployees(_employees);
		}, 0);
	}, []);

	const handleSearchTextChange = (e) => {
		const value = e.target.value;
		setSearchText(value);

		const _filteredEmployees = originalEmployees.filter((employee) => {
			const bulkSearch = employee.firstName + '|'+ employee.lastName; 
			return bulkSearch.toLowerCase().includes(value.toLowerCase());
		});
		setFilteredEmployees(_filteredEmployees);
	};

	return (
		<main>
			<Header />
			<input
				value={searchText}
				onChange={(e) => handleSearchTextChange(e)}
				className="w-full text-3xl rounded mb-3 md:w-[30rem]"
				placeholder="search employees"
			/>
			{filteredEmployees.length === 0 ? (
				<p>
					<ImSpinner9 className="animate-spin text-3xl text-yellow-300" />
				</p>
			) : (
				<>
					<p className="mb-3">
						There are {filteredEmployees.length} employees.
					</p>
					<div>
						{filteredEmployees.map((employee) => {
							return (
								<Employee
									employee={employee}
									key={employee.employeeID}
								/>
							);
						})}
					</div>
				</>
			)}
		</main>
	);
}

export default App;
