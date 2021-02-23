import React from "react";
import Navbar from "./navbar";
import Jumbo from "./jumbo";

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<Jumbo />
		</div>
	);
}
