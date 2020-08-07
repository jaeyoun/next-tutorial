import Input from "Components/input";

export default (props: any) => {
  const data = [
    { label: "Firstname", placeholder: "John" },
    { label: "Lastname", placeholder: "Doe" },
    { label: "Phone", placeholder: "08123456789" },
  ];

  return (
    <div className="flex">
      <div>
        <img src={props.imgsrc} width="200" />
      </div>
      <div>
        {data.map(item => (
          <Input value={item} />
        ))}
      </div>
    </div>
  );
};
