function Producto({nombre, precio, descripcion}) {
    return(
        <div>
            <ul className="listaProducto">
                <li>{nombre}</li>
                <li>{precio}</li>
                <li>{descripcion}</li>
            </ul>
        </div>
    );

}
export default Producto