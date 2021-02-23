import React from "react";
import Navbar from "./navbar";
import Jumbo from "./jumbo";
import Cards from "./cards";
import Footer from "./footer";

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbo />
				<Cards />
			</div>
			<Footer />
		</div>
	);
}
