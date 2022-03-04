import Navbar from "./NavBar";
import logo from '../logo.svg';
function Header() {
    return (
        <header>
            <img src={logo} className="" alt="logo" />
            <Navbar />
        </header>
    );
}
export default Header