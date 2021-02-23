import React from "react";
import Navbar from "./navbar";
import Jumbo from "./jumbo";
import Cards from "./cards";

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<Jumbo />
			<Cards />
		</div>
	);
}
