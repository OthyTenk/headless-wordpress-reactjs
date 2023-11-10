// eslint-disable-next-line react/prop-types
const Textarea = ({ id, name, label, rows = 3, required, className }) => {
  return (
    <div className="flex flex-col">
      <label className="text-neutral-500 text-sm" htmlFor={id}>
        {label || name}
      </label>
      <textarea
        rows={rows}
        id={id}
        required={required}
        name={name}
        className={`p-2 border rounded-md hover:border-rose-300 focus:border-rose-400 outline-none ${
          className || ""
        }`}
      />
    </div>
  );
};

export default Textarea;
