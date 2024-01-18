import "./home.css";

import Trips from "../components/ui/Trips";

import SimpleBottomNavigation from "../components/ui/BottomNavigation";

import { useTrips } from "../hooks/useTrips";

import { Switch } from "@mui/material";

import { useEffect, useState } from "react";

function Home() {
  const { trips } = useTrips();
  const [dollarPrice, setDollarPrice] = useState(false);
  const [information, setInformation] = useState({
    compra: 0,
    venta: 0,
    casa: "",
    nombre: "",
    moneda: "",
    fechaActualizacion: "",
  });

  const handleChange = (event) => {
    setDollarPrice(event.target.checked);
  };

  useEffect(() => {
    fetch("https://dolarapi.com/v1/dolares/blue")
      .then((response) => response.json())
      .then((data) => setInformation(data));
  }, []);

  const montoTotal = trips.reduce((acc, trip) => acc + Number(trip.amount), 0);
  const comision = montoTotal * 0.3;
  const montoDecimal = (montoTotal % 1) * 100;
  const montoComisionDec = (comision % 1) * 100;

  const USDmontoTotal = montoTotal / information.venta;
  const USDcomision = USDmontoTotal * 0.3;
  const USDmontoDecimal = (USDmontoTotal % 1) * 100;
  const USDmontoComisionDec = (USDcomision % 1) * 100;

  return (
    <div id="contenedor">
      <h1 className="tituloMisViajes">Mis Viajes</h1>
      <div className={dollarPrice ? "montosResumenDolar": "montosResumen"}>
        <div className={dollarPrice ? "montoRecaudadoDolar" : "montoRecaudado"}>
          <p className="tituloRecaudado">Recaudado este mes:</p>
          <p className="montoTotal">
            {dollarPrice ? "U$D " : "$"}
            {(dollarPrice ? USDmontoTotal : montoTotal).toFixed(0)}
            <sup>
              {(dollarPrice ? USDmontoDecimal : montoDecimal)
                .toFixed(0)
                .padStart(2, "0")}
            </sup>
          </p>
        </div>
        <div className={dollarPrice ? "dollarCard" : "comision"}>
          <p className="tituloRecaudado">Comisión (30%)</p>
          <p className="montoTotal">
            {dollarPrice ? "U$D " : "$"}
            {(dollarPrice ? USDcomision : comision).toFixed(0)}
            <sup>
              {(dollarPrice ? USDmontoComisionDec : montoComisionDec)
                .toFixed(0)
                .padStart(2, "0")}
            </sup>
          </p>
        </div>
      </div>

      <div className="dolar">
        <Switch
          checked={dollarPrice}
          onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          color="success"
        />
        <p>Mostrar montos totales en Dólares</p>
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
        {trips.length === 0 && <p>No hay viajes cargados</p>}
      </div>
      <div className="barraNav">
        <SimpleBottomNavigation number={1} />
      </div>
    </div>
  );
}

export default Home;
