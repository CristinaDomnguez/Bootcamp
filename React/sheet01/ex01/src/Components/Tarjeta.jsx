function Tarjeta({nombre, apellido, ocupacion, imagenURL}) {
    return (
      <div className="card">
        <img src={imagenURL} alt={`${nombre} ${apellido}`}/>
        <div>
        <h2>{`${nombre} ${apellido}`}</h2>
        <p>{ocupacion}</p>
        </div>
      </div>
    );
  }
  
  export default Tarjeta
  