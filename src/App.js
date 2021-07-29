import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import People from './Component/People'


function App() {
	const [data, setPeople] = useState(null);

	const url = "https://swapi.dev/api/people/";

	useEffect(() => {
		getAllPeople();
	}, [url]);

	const getAllPeople = () => {
		axios
			.get(url)
			.then((response) => {
				//console.log(response.data.results)
				const allPeople = response.data.results;
				setPeople(allPeople);
			})
			.catch((error) => console.error(`Error: $(error)`));
	};

	if(data) {
		return (
			<div className="App">
				<People data={data} />
			</div>
		);
	}
	else{
		return (
			<div></div>
		)
	}
}
export default App;
