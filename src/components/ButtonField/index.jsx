import { Button } from "./styles";

export default function Index({ label = "Submit", click = () => {} }) {
  return (
    <Button type="submit" onClick={click}>
      {label}
    </Button>
  );
}
