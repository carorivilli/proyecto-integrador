

import "./home.css";
import { Link } from "react-router-dom";
import Trips from "../components/ui/Trips";
import Button from "../components/ui/Button";

export const trips = [
  {
    id: 1,
    date: new Date(2023, 9, 13),
    amount: "2897.33",
  },
  {
    id: 2,
    date: new Date(2023, 9, 12),
    amount: "3130.41",
  },
  {
    id: 3,
    date: new Date(2023, 9, 11),
    amount: "4800.32",
  },
  {
    id: 4,
    date: new Date(2023, 9, 10),
    amount: "3500.56",
  },
  {
    id: 5,
    date: new Date(2023, 9, 13),
    amount: "2897.33",
  },
  {
    id: 6,
    date: new Date(2023, 9, 12),
    amount: "3130.41",
  },
  {
    id: 7,
    date: new Date(2023, 9, 11),
    amount: "4800.32",
  },
  {
    id: 8,
    date: new Date(2023, 9, 10),
    amount: "3500.56",
  },
  {
    id: 9,
    date: new Date(2023, 9, 13),
    amount: "2897.33",
  },
  {
    id: 10,
    date: new Date(2023, 9, 12),
    amount: "3130.41",
  },
  {
    id: 11,
    date: new Date(2023, 9, 11),
    amount: "4800.32",
  },
  {
    id: 12,
    date: new Date(2023, 9, 10),
    amount: "3500.56",
  },
];

function Home() {
  return (
    <div id="contenedor">
      <h1 className="tituloMisViajes">Mis Viajes</h1>
      <div className="montosResumen">
        <div className="montoRecaudado">
          <p className="tituloRecaudado">Recaudado este mes:</p>
          <p className="montoTotal">
            $ 103.850<sup>54</sup>
          </p>
        </div>
        <div className="comision">
          <p className="tituloRecaudado">Comisión (30%)</p>
          <p className="montoTotal">
            $ 31.155<sup>19</sup>
          </p>
        </div>
      </div>
      <div id="contenedorViajesTitulo">
        <h2 className="titulo">Ultimos viajes</h2>
        <Link to="/allTrips" className="verTodos">
          Ver todos
        </Link>
      </div>
      <div className="viajesHome">
        {trips.map((trip) => (
          <Trips
            key={trip.id}
            id={trip.id}
            date={trip.date}
            amount={trip.amount}
          />
        ))}
      </div>
      <Button href="/newTrip" variant="botonNuevoViaje">
        + Nuevo Viaje
      </Button>
    </div>
  );
}

export default Home;
