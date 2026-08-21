function TextInput({
  placeholder,
  value,
  onChange,
  onKeyDown,
  size = "medium"
}) {
  return (
    <input
      type="text"
      className={`neon-input ${size}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
}

export default TextInput;
