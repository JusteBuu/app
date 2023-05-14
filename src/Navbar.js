import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom"
import PokeBall from "./images/pokeball.svg";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
        <>
		<header className="header">
			<img src={PokeBall} alt=""></img>
			<nav ref={navRef}>

				<NavLink className="navLink"
            	to="/">Pokedex </NavLink>

				<NavLink className="navLink"
            	to="/about">About </NavLink>

				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
        
        </>
	);
}

export default Navbar;