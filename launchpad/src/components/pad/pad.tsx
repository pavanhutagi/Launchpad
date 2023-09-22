import "./style.css";

interface PadProps {
  color?: string;
}

export default function Pad(props: PadProps) {
  const { color } = props;

  const padStyle = {
    backgroundColor: color || "rgb(255, 255, 255)",
  };

  return (
    <>
      <div className="pad-container" style={padStyle}></div>
    </>
  );
}
