
import "./Trip.css";
import { FaEye, FaPencilAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Trips(props) {
  const { id, date, amount } = props;
  const entero = Math.floor(amount);
  const decimal = Math.floor((amount - entero) * 100);
  return (
    <div id="contenedorViajes">
      <div className="datosViaje">
        <p className="fecha">{date.toLocaleString().split(",")[0]}</p>
        <p className="montoViaje">
          {entero} <sup>{decimal}</sup>
        </p>
      </div>
      <div className="accionesViaje">
        <Link to={`/editTrip/${id}`}>
          <button className="botonEditar botonAccionViaje">
            <FaPencilAlt className="iconoEditarViaje" />
          </button>
        </Link>
        <Link to={`/ReadTrip/${id}`}>
          <button className="botonVer botonAccionViaje">
            <FaEye className="iconoVerViaje" />
          </button>
        </Link>
      </div>
    </div>);
}

export default Trips;
