import "./Button.css";
function Button(props) {
  const { children, href, variant, disabled, type, role } = props;
  const btnVariante = variant ?? "primary";
  if (!href) {
    return (
      <button className={btnVariante} disabled={disabled} type={type} role={role}>
        {children}
      </button>
    );
  }
  return (
    <a href={href} className="LinkBoton">
      <button className={btnVariante} disabled={disabled} type={type}>
        {children}
      </button>
    </a>
  );
}

export default Button;
