import Home from "./pages/Home.jsx";
import EditTrip from "./pages/EditTrip.jsx";
import AllTrips from "./pages/AllTrips.jsx";
import NewTrip from "./pages/NewTrip.jsx";
import Login from "./pages/Login.jsx";
import ReadTrip from "./pages/ReadTrip.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login></Login>}></Route>
        <Route path="/home" exact element={<Home></Home>}></Route>
        <Route path="/editTrip/:tripId" exact element={<EditTrip></EditTrip>}></Route>
        <Route path="/allTrips" exact element={<AllTrips></AllTrips>}></Route>
        <Route path="/newTrip" exact element={<NewTrip></NewTrip>}></Route>
        <Route path="/ReadTrip/:tripId" exact element={<ReadTrip></ReadTrip>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
