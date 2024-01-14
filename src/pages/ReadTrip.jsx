import TripsForm from "../components/trips/TripsForm";
import { useParams } from "react-router-dom";
import { trips } from "./Home";

 const ReadTrip = () => {
  const { tripId } = useParams(); //El useParams es un hook que nos permite acceder a los parámetros de la URL. En este caso, el parámetro que nos interesa es el id del viaje que queremos editar.
  const trip = trips.find((trip) => trip.id == tripId);
  return( 
    <TripsForm modo="read" tripValue={trip} />

  );
};

export default ReadTrip;

