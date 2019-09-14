import "../styles/index.css";

function Button(props: any) {
  const common = "text-sm font-semibold h-8 px-3 border rounded";
  const notSelected = `${common} bg-transparent hover:bg-gray-500 text-gray-700 hover:text-white border-gray-500 hover:border-transparent`;
  const selected = `${common} bg-gray-500 text-white border-transparent`;

  return (
    <button
      className={props.isSelected ? selected : notSelected}
      onClick={() => props.onClick()}
    >
      {props.text}
      {props.children}
    </button>
  );
}

export default Button;
