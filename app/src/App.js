
import Header from "./components/Header"
import logo from './img/logo.svg';
import Carrusel from "./components/Carrusel"
import Main from "./components/Main"
import Footer from "./components/Footer"
import Polera from './img/polera.jpg';
function App() {
  
  return (
    <>
      <Header logo={logo}
      />
      <Carrusel />
      <Main
      />
      < Footer logo={logo} />
    </>
  )
}

export default App;
