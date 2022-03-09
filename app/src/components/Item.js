import ItemCount from "./ItemCount"
const Item = (props) => {
    const miOnAdd = () => {}
    return (
        <div className='card-product container'>
        <div>
            <h2 className='title'>titulo de los productos</h2>
        </div>



        <div className='padre'>
        <div className='hijo'>
            <img src={props.polera} alt=""></img>
            <div className='product'>
                <h4>{props.nombre}</h4>
                <p>$<span>{props.valor}</span></p>
                <p>$<span>{props.newvalor}</span></p>
                
                </div>
  
        </div>
        <div className='hijo'>
            <img src={props.polera} alt=""></img>
            <div className='product'>
                <h4>{props.nombre}</h4>
                <p>$<span>{props.valor}</span></p>
                <p>$<span>{props.newvalor}</span></p>
                
                </div>
   
        </div>
        <div className='hijo'>
            <img src={props.polera} alt=""></img>
            <div className='product'>
                <h4>{props.nombre}</h4>
                <p>$<span>{props.valor}</span></p>
                <p>$<span>{props.newvalor}</span></p>
                
                </div>
           <ItemCount 
            initial={1}
            stock={5}
            onAdd={miOnAdd}  
            />   
        </div>
    </div>
    </div>
    )
}
export default Item