import "./App.css";
import ListaDeProductos from "./Components/ListaDeProductos";

function App() {
  const datos = [
    {
      nombre: "Botella",
      precio: "10€",
      descripcion: "Botella de agua de metal con cierre hermetico",
    },
    {
      nombre: "Gafas",
      precio: "60€",
      descripcion: "Gafas con filtro de luz azul",
    },
    {
      nombre: "Ordenador Portatil",
      precio: "450€",
      descripcion: "Memoria ram de 16gb, disco ssc de 255, 14 pulgadas",
    },
  ];
  return (
    <>
      <ListaDeProductos productos={datos} />
    </>
  );
}

export default App;
