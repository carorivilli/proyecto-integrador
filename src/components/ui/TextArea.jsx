
import "./textArea.css";
function TextArea(props) {
  const { onChange, name, value,disabled } = props;
  return (
    <>
      <textarea
        className="observaciones"
        onChange={onChange}
        value={value}
        name={name}
        disabled={disabled}
      ></textarea>
    </>
  );
}

export default TextArea;
