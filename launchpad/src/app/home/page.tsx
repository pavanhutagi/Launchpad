import "./style.css";
import Pad from "../../components/pad/pad";

export default function Home() {
  const pads = [];

  for (let i = 0; i < 64; i++) {
    pads.push(<Pad key={i} />);
  }

  return (
    <>
      <div className="launchpad-container">
        <div className="launchpad">{pads}</div>
      </div>
    </>
  );
}
