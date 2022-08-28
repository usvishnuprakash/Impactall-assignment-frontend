import { Input, InputWrapper, Tr } from "./styles";

export default function Index({
  label = "",
  input = {
    type: "text",
    error: "",
    onchange: () => {},
    value: "",
  },
}) {
  return (
    <Tr>
      <td width="50%" height="60px">
        {label}
      </td>
      <td width="50%">
        <InputWrapper>
          {!!input.error === true && <div className="errorShow">{input.error}</div>}
          <Input
            onChange={(e) => {
              input.onchange(e.target.value);
            }}
            value={input.value}
            type={input.type}
          />
        </InputWrapper>
      </td>
    </Tr>
  );
}
