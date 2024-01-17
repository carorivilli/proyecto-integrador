

import "./home.css";

import Trips from "../components/ui/Trips";

import SimpleBottomNavigation from "../components/ui/BottomNavigation";

import { useTrips } from "../hooks/useTrips";

function Home() {
  const {trips} = useTrips();
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
        {trips.length === 0 && (
          <p>No hay viajes cargados</p>
        )}
      </div>
      <div className="barraNav">
        <SimpleBottomNavigation number={1} />
      </div>
      

    </div>
  );
}

export default Home;
