import {useState} from "react"
const Main = (props) => {
    const [contador, setContador] = useState(props.initial)
    const handleClick = () => {
        if (props.stock>contador) {
            setContador(contador + 1)
        } 
    }
    const restar = () => {
        if (contador!=0) {
            setContador(contador - 1)
        }
        
    }
    const miOnAdd = () =>{}
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
                <div>
                    <p>Cantidad: <span>{contador}</span></p>
                <button className='btn btn-color' onClick={restar}>menos</button>
                    <button className='btn btn-color' onClick={handleClick}>aumentar</button>
                    
                </div>    
            </div>
            <div className='hijo'>
                <img src={props.polera} alt=""></img>
                <div className='product'>
                    <h4>{props.nombre}</h4>
                    <p>$<span>{props.valor}</span></p>
                    <p>$<span>{props.newvalor}</span></p>
                    
                    </div>
                <div>
                    <p>Cantidad: <span>{contador}</span></p>
                <button className='btn btn-color' onClick={restar}>menos</button>
                    <button className='btn btn-color' onClick={handleClick}>aumentar</button>
                    
                </div>    
            </div>
            <div className='hijo'>
                <img src={props.polera} alt=""></img>
                <div className='product'>
                    <h4>{props.nombre}</h4>
                    <p>$<span>{props.valor}</span></p>
                    <p>$<span>{props.newvalor}</span></p>
                    
                    </div>
                <div className="cantidad">
                    
                    <button className='btn btn-color' onClick={restar}>-</button>
                    <p>Cantidad: <span>{contador}</span></p>
                    <button className='btn btn-color' onClick={handleClick}>+</button>
                </div>
                <div>
                <button onAdd={miOnAdd} className='btn btn-color'>Pagar</button>    
                </div>    
            </div>
        </div>
    </div>
    )
}
export default Main