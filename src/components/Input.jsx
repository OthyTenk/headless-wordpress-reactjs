// eslint-disable-next-line react/prop-types
const Input = ({ id, name, label, required, type = "text", className }) => {
  return (
    <div className="flex flex-col">
      <label className="text-neutral-500 text-sm" htmlFor={id}>
        {label || name}
      </label>
      <input
        id={id}
        required={required}
        name={name}
        type={type}
        className={`p-2 border rounded-md hover:border-rose-300 focus:border-rose-400 outline-none ${
          className || ""
        }`}
      />
    </div>
  );
};

export default Input;
