
import Trips from "../components/ui/Trips";
import { trips } from "./Home";
import "./allTrips.css"
import SimpleBottomNavigation from "../components/ui/BottomNavigation";

function AllTrips() {
  return (
    <div className="contenedor">
      <h1 className="titulo">Todos los viajes</h1>
      <div className="viajes">
      {trips.map((trip) => (<Trips key={trip.id} id={trip.id} date={trip.date} amount={trip.amount} />))}  
      </div>
      <SimpleBottomNavigation number={0} />
    </div>
  );
}

export default AllTrips;
