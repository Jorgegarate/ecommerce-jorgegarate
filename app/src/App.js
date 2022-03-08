
import Header from "./components/Header"
import logo from './img/logo.svg';
import Carrusel from "./components/Carrusel"
import Main from "./components/Main"
import Footer from "./components/Footer"
import Polera from './img/polera.jpg';
function App() {
  const miOnAdd = () => {}
  return (
    <>
      <Header logo={logo}
      />
      <Carrusel />
      <Main
      polera={Polera}
      nombre="Polera"
      valor="3490"
      newvalor="2980"
      initial={1}
      stock={5}
      onAdd={miOnAdd} 
      />
      < Footer logo={logo} />
    </>
  )
}

export default App;
