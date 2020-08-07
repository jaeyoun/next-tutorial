import "Styles/index.css";

export default (props: any) => {
  return (
    <span className="font-sans bg-gray-300 p-2 rounded-sm">{props.text}</span>
  );
};
