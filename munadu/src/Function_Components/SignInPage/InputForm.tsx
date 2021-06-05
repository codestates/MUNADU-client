import { Input } from "../../StyledComponents/input";
import { SetBoard } from "../../StyledComponents/sign";

interface Iinput {
  name: string;
  type: string;
  ref?: any;
  callback: React.ChangeEventHandler<HTMLInputElement>;
}

export default function InputForm({ name, type, ref, callback }: Iinput) {
  return (
    <SetBoard>
      <div>{name}</div>
      <Input
        margin="0px 0px 10px 0px"
        type={type}
        ref={ref}
        onChange={callback}
      ></Input>
    </SetBoard>
  );
}
