import "./Input.css";
import PropTypes from "prop-types";
function Input(props) {
  const { type, placeHolder, onChange, value, name, hasError, disabled,className} = props;
  return (
    <>
      <input
        type={type ?? "text"}
        id="monto"
        className = {(hasError ? "box1Error" : "box1") + " " + className}
        placeholder={placeHolder}
        onChange={onChange}
        value={value}
        name={name}
        disabled={disabled}
      
      />
    </>
  );
}

export default Input;

Input.propTypes = {
  type: PropTypes.string,
  placeHolder: PropTypes.string,
};
