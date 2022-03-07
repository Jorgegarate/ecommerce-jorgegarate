import polera from '../img/polera.jpg';
function Main(props) {
    let contador=0;
    const handleClick = () => {
        console.log("click")
    }
    return (
    <>
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
            </div>
            <div>
            <h4>{props.nombre}</h4>
                    <p>$<span>{props.valor}</span></p>
                    <p>$<span>{props.newvalor}</span></p>
                    <p>cantidad: <span>{contador}</span></p>
                    <button onClick={handleClick} className='btn btn-color'>aumentar</button>
            </div>

        </div>
    </div>
    
    </>
    )
 
}
export default Main