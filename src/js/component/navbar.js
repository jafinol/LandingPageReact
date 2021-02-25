import React from "react";

const Navbar = () => {
	return (
		<div>
			<nav className="navbar navbar-dark bg-dark">
				<div className="container-fluid">
					<div className="container">
						<a className="navbar-brand">Start Bootstrap</a>
						<form className="d-flex">
							<button className="btn btn btn-dark">Home</button>
							<button className="btn btn btn-dark">About</button>
							<button className="btn btn btn-dark">
								Service
							</button>
							<button className="btn btn btn-dark">
								Contact
							</button>
						</form>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
