import Label from "Components/label";
import Text from "Components/text";

export default (props: any) => {
  return (
    <div>
      <Label text={props.value.label} />
      <Text placeholder={props.value.placeholder} />
    </div>
  );
};
