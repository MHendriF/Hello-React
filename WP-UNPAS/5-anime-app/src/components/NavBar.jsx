import Logo from "./Logo";
import Search from "./Search";

export default function NavBar({animes}) {
	return (
		<nav className="nav-bar">
			<Logo />
			<Search animes={animes} />
		</nav>
	);
}