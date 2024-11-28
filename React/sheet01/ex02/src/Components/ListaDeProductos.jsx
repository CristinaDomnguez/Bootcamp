import Producto from "./Producto";

function ListaDeProductos({productos}) {
  return productos.map((item) => (
    <Producto
      key={item.nombre}
      nombre={item.nombre}
      precio={item.precio}
      descripcion={item.descripcion}
    />
  ));
}

export default ListaDeProductos;
