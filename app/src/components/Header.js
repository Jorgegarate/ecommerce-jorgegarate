import Navbar from "./NavBar";
import IconsNavbar from "./IconsNavbar";
import logo from '../logo.svg';
function Header() {
    return (
        <header>
            <img src={logo} className="" alt="logo" />
            <Navbar />
            <IconsNavbar />
        </header>
    );
}
export default Header