import React from "react";
import "./Label.css";


function Label(props) {
  const {children,optional} = props;
  return (
    <>
      <div className="label">{children}
      {/* {%Si opcional es verdadero entonces se muestra el opcional%} */}
      {optional && <span className="opcional"> (opcional)</span>}
      </div>
    </>
  );
}

export default Label;
