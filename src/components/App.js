import React from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import Card from "./Card";

function App() {
	return (
		<div className="App">
			<Nav />
			{hogs.map((hog) => {
				return (
					<Card hog={hog}/>
				)
			})}
		</div>
	);
}

export default App;
