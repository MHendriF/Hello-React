import Logo from "./Logo";
import Search from "./Search";

export default function NavBar() {
	return (
		<nav className="nav-bar">
			<Logo />
			<Search />
		</nav>
	);
}