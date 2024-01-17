import TripsForm from "../components/trips/TripsForm";
import { useParams } from "react-router-dom";
import { useTrips } from "../hooks/useTrips";
import SimpleBottomNavigation from "../components/ui/BottomNavigation";

 const ReadTrip = () => {
  const {trips} = useTrips();
  const { tripId } = useParams(); //El useParams es un hook que nos permite acceder a los parámetros de la URL. En este caso, el parámetro que nos interesa es el id del viaje que queremos editar.
  const trip = trips.find((trip) => trip.id == tripId);
  return( 
    <div id="contenedorGeneral">
      <TripsForm modo="read" tripValue={trip}></TripsForm>
      <SimpleBottomNavigation number={-1} />
    </div>

  );
};

export default ReadTrip;

