import { BoxWrapper, WindowWrapper } from "./styles";

export default function Index({ children = "" }) {
  const bg = {
    red: "#ff6161",
    yellow: "#ffff61",
    gray: "#7e7e7e",
  };
  return (
    <BoxWrapper>
      <WindowWrapper>
        <div className="signal">
          <div className="dots" style={{ backgroundColor: bg.red }} />
          <div className="dots" style={{ backgroundColor: bg.yellow }} />
          <div className="dots" style={{ backgroundColor: bg.gray }} />
        </div>
      </WindowWrapper>
      <div className="childWrapper">{children}</div>
    </BoxWrapper>
  );
}
