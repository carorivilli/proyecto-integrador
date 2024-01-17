import { useState } from "react";
import "./TripsForm.css";
import { useNavigate } from "react-router-dom";
import Input from "../ui/Input";
import Label from "../ui/Label";
import TextArea from "../ui/TextArea";
import Button from "../ui/Button";
import { useTrips } from "../../hooks/useTrips";



function TripsForm(props) {
  const { modo, tripValue } = props;
  const { addTrip, editTrip } = useTrips();

  const isNewTrip = modo === "new";
  const isEditTrip = modo === "edit";
  const isReadTrip = modo === "read";
  
  const navigate = useNavigate();

  const [trip, setTrip] = useState({
    // tripValue.? significa que si tripValue es undefined, entonces se asigna un string vacío
    amount: tripValue?.amount ?? "",
    date: tripValue?.date
      ? new Date(tripValue.date).toISOString().slice(0, 10)
      : "",
    observation: tripValue?.observation ?? "",
  });

  const [error, setError] = useState({
    amount: "",
    date: "",
  });

  const handleInputChange = (event) => {
    const value = event.target.value;
    const campo = event.target.name;
    if (campo === "amount") {
      setError({ ...error, amount: validateAmount(value) });
    }
    if (campo === "date") {
      setError({ ...error, date: validateDate(value) });
    }
    setTrip({ ...trip, [campo]: value });
  };

  const activarBoton = () => {
    if (trip.amount !== "" && trip.date !== "") {
      return false;
    } else {
      return true;
    }
  };

  const validateAmount = (value) => {
    if (value === "") {
      return "";
    }
    if (isNaN(Number(value))) {
      return "El monto debe ser un número";
    }
    if (value < 0) {
      return "El monto no debe ser menor a 0";
    }
  };

  const validateDate = (value) => {
    const fecha = new Date(value);
    if (fecha > Date.now()) {
      return "La fecha no puede ser posterior a la actual";
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(isEditTrip){
      editTrip(tripValue.id, trip);
    }
    if(isNewTrip){
      addTrip(trip);
    }
    alert("Se ha guardado el viaje");
    navigate("/home");
  };

  return (
    <div>
      <h1 className="tituloEditionPage">
        {isNewTrip && "Nuevo Viaje"}
        {isEditTrip && `Editar Viaje ${tripValue.id}`}
        {isReadTrip && `Viaje ${tripValue.id}`}
      </h1>

      <form className="contenedorForm" onSubmit={handleSubmit}>
        <Label>Monto</Label>
        <Input
          placeHolder="$"
          onChange={handleInputChange}
          value={trip.amount}
          name="amount"
          hasError={Boolean(error.amount)}
          disabled={isReadTrip}
        />
        <p className="error">{error.amount}</p>
        <Label>Fecha</Label>
        <Input
          type="date"
          onChange={handleInputChange}
          value={trip.date}
          name="date"
          hasError={Boolean(error.date)}
          disabled={isReadTrip}
        />
        <p className="error">{error.date}</p>
        <Label optional={true}>Observación</Label>
        <TextArea
          onChange={handleInputChange}
          value={trip.observation}
          name="observation"
          disabled={isReadTrip}
        />

        <div className="botonesForm">
          <Button
            href="/home"
            variant="botonCancelar"
            disabled={false}
            type="button"
          >
            Cancelar
          </Button>
          {!isReadTrip && (
            <Button
              variant="botonActualizar"
              disabled={activarBoton()}
              type="submit"
            >
              {isNewTrip && "Guardar"}
              {isEditTrip && "Actualizar"}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}

export default TripsForm;
