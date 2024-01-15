import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import Eye from '@mui/icons-material/RemoveRedEye';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {useState} from "react";
import { useNavigate } from "react-router-dom";

export default function SimpleBottomNavigation(props) {
  const {number} = props;
  const [value, setValue] = useState(number);
  const navigate = useNavigate();
  const routes = [
    "/alltrips",
    "/home",
    "/newTrip",
  ];

  return (
    <Box sx={{}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          navigate(routes[newValue]);

        }}
      >
        
        <BottomNavigationAction label="Viajes" icon={<Eye />} />
        <BottomNavigationAction label="Inicio" icon={<HomeIcon />} />
        <BottomNavigationAction label="Nuevo viaje" icon={<AddCircleIcon />} />
      </BottomNavigation>
    </Box>
  );
}