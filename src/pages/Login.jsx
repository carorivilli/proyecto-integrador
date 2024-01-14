import "./Login.css";
import Button from "../components/ui/Button";
import Image from "../components/ui/Image";
import Label from "../components/ui/Label";
import Input from "../components/ui/Input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const userValido = "carorivilli@gmail.com";
  const passValido = "123456";
  const navigate = useNavigate();


  const [user, setUser] = useState({
    user: "",
    password: "",
  });

  const [error, setError] = useState({
    user: "",
    password: "",
  });


  const handleInputChange = (event) => {
    const value = event.target.value;
    const campo = event.target.name;
    setUser({ ...user, [campo]: value });
  };

  const activarBoton = () => {
    if (user.user !== "" && user.password !== "") {
      return false;
    } else {
      return true;
    }
  };

  const validarUsuario = (event) => {
    event.preventDefault();
    if (user.user === userValido && user.password === passValido) {
      setError({ ...error, user: "", password: "" });
      alert("Usuario correcto");
      navigate("/home");
      
    } else {
      setError({ ...error, user: "Usuario incorrecto", password: "Contraseña incorrecta" });
      alert("Usuario incorrecto");
      
      
    }
  }

  


  return (
      <form onSubmit={validarUsuario}>
        <div id="contenedorLogin">
          <h1 className="tituloLogin">¡Mi Comisión!</h1>
          <Image />
          <div className="usuario">
            <Label>Usuario</Label>
            <Input
              type="text"
              placeHolder="Ingrese su usuario"
              value={user.user}
              className="boxUsuario"
              onChange={handleInputChange}
              name="user"
              hasError={Boolean(error.user)}
            />
          </div>
          <p className="errorUP">{error.user}</p>
          <div className="contraseña">
            <Label>Contraseña</Label>
            <Input
              type="text"
              placeHolder="Ingrese su contraseña"
              className="boxPasw"
              onChange={handleInputChange}
              value={user.password}
              name="password"
              hasError={Boolean(error.password)}
            />
            <p className="errorUP">{error.password}</p>
          </div>
          <div className="recordar">¿Olvidó su contraseña?</div>
          <div>
            <Button
              variant="botonInicioSesion"
              disabled={activarBoton()}
              type="submit"
            >
              Inicar Sesion
            </Button>
          </div>
          <div className="registrarse">
            <a href="">Registrarse</a>
          </div>
        </div>
      </form>
  );
}

export default Login;
