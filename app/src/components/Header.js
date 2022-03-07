import Navbar from "./NavBar";
import IconsNavbar from "./IconsNavbar";
function Header(props) {
    return (
        <header className="header">
            <div className="container">
                <div>
                    <img src={props.logo} className="" alt="logo" />
                    <h1>Tienda</h1>
                </div>
                <Navbar />
                <IconsNavbar />
            </div>

        </header>
    );
}
export default Header