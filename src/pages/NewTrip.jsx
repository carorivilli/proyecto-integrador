import TripsForm from "../components/trips/TripsForm";
import SimpleBottomNavigation from "../components/ui/BottomNavigation";
import "./NewTrip.css";

function NewTrip() {
  return (
    <div id="contenedorGeneral">
      <TripsForm modo="new"></TripsForm>
      <SimpleBottomNavigation number={2} />
    </div>
  );
}

export default NewTrip;
