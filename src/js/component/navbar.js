import React, {  useContext, useEffect, useState  } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<nav className="blog-navbar navbar navbar-expand-lg justify-content-between">
				<Link to="/">
					<img className="logo" src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254" />
				</Link>
				<div className="dropdown favs-button">
					<button className="inner-favs-button btn text-white dropdown-toggle d-flex" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						<i className="far fa-star"></i>&nbsp;Favorites&nbsp;&nbsp;<p className=" favs-counter m-0"><strong>{store.favorites.length}</strong></p></button>

					<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
						{(store.favorites && store.favorites.length > 0) ?
							store.favorites.map((item, index) => (
								<Link to={item && item.path ? ("/" + item.path + "/" + item.index) : ""} style={{ textDecoration: 'none' }}>
									<li key={item}>
										<a className="dropdown-item d-flex justify-content-between">{item}<i onClick={() => actions.deleteFavorite(index)} className="trash fas fa-trash-alt mt-1 ms-3"></i></a>
									</li>
								</Link>
							))
							: <li className="text-center">Add Favorites Here!</li>}
					</ul>

				</div>
			</nav>
			<nav className="navbar navbar-expand-lg sub-nav navbar-dark">
				<div className="container-fluid">
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse justify-content-around" id="navbarNavDropdown">
						<ul className="navbar-nav">
							<li className="nav-item subnav-item mx-5">
								<a className="nav-link" aria-current="page" href="#characters">CHARACTERS</a>
							</li>
							<li className="nav-item subnav-item mx-5">
								<a className="nav-link" href="#planets">PLANETS</a>
							</li>
							<li className="nav-item subnav-item mx-5">
								<a className="nav-link" href="#vehicles">VEHICLES</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>


		</div>
	);
};