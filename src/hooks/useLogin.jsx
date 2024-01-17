import { useState } from "react";

const userValido = "carorivilli@gmail.com";
const passValido = "123456";
const nameValido = "Carolina Rivilli";

export function useLogin() {
  const getLoginFromSesionStorage = () => {
    const user = window.sessionStorage.getItem("user");
    if (user) {
      return JSON.parse(user);
    }
    return {
      name: "",
      isLogged: false,
    };
  };

  const [userData, setUserData] = useState(getLoginFromSesionStorage());

  const doLogin = (user) => {
    if (user.user === userValido && user.password === passValido) {
      const newUser = { name: nameValido, isLogged: true };
      setUserData(newUser);
      window.sessionStorage.setItem("user", JSON.stringify(newUser));
      return true;
    }
    return false;
  };

  const doLogout = () => {
    const newUser = { name: "", isLogged: false };
    setUserData(newUser);
    window.sessionStorage.setItem("user", JSON.stringify(newUser));
  };

    return {
        doLogin,
        doLogout,
        userData,
    };
}
