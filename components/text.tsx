import "Styles/index.css";

export default (props: any) => {
  return (
    <input
      className="font-sans border border-gray-300 p-2 rounded-sm"
      value={props.value}
      placeholder={props.placeholder}
    />
  );
};
