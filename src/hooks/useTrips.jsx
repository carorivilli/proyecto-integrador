import { useState } from "react";
export function useTrips() {
  const getTripsFromLocalStorage = () => {
    const trips = localStorage.getItem("trips");
    if (trips) {
      return JSON.parse(trips);
    }
    return [];
  };

  const [trips, setTrips] = useState(getTripsFromLocalStorage());

  const saveTrips = (newTrips) => {
    setTrips(newTrips);
    localStorage.setItem("trips", JSON.stringify(newTrips));
  };

  const addTrip = (trip) => {
    let newTripId = 1;
    for (let i = 0; i < trips.length; i++) {
      if (trips[i].id >= newTripId) {
        newTripId = trips[i].id + 1;
      }
    }
    const newTrips = [...trips, { ...trip, id: newTripId }];
    saveTrips(newTrips);
  };

  const editTrip = (id, trip) => {
    const newTrips = trips.map((t) => {
      if (t.id === id) {
        return { ...trip, id };
      }
      return t;
    });
    saveTrips(newTrips);
  };

  const getTripById = (id) => {
    return trips.find((trip) => trip.id == id);
  };

  return {
    addTrip,
    editTrip,
    getTripById,
    trips,
  };
}
