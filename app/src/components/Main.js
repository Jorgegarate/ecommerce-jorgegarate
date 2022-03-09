import Item from "./Item"
import Polera from '../img/polera.jpg';
const Main = () => {
    const miOnAdd = () => {}
    return (

       <Item       
       polera={Polera}
       nombre="Polera"
       valor="3490"
       newvalor="2980"
       initial={1}
       stock={5}
       onAdd={miOnAdd} 
       />
    )
}
export default Main