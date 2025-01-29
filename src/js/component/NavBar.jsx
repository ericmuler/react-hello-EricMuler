import React from "react";

const Navbar = () => {
	return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container">
        <a className="navbar-brand text-light bg-dark" href="">Mi cosa</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link text-light bg-dark" href="#">Proyectos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light bg-dark" href="#">Cocteles</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light bg-dark" href="#">Juegos</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
		
	);
};

export default Navbar;