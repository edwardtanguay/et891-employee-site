import { useEffect } from 'react';

const employeesUrl = 'https://edwardtanguay.vercel.app/share/employees.json';

function App() {

  useEffect(() => {
    console.log('nnn');
  }, []);

	return (
		<main>
			<h1 className="text-3xl text-orange-500 italic">Employee Site</h1>
		</main>
	);
}

export default App;
