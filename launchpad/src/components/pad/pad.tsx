import "./style.css";

interface PadProps {
  padKey: number;
  padColor?: string;
}

export default function Pad(props: PadProps) {
  const { padKey } = props;
  const { padColor } = props;

  const padStyle =
    padKey === 28
      ? {
          backgroundColor: padColor || "rgb(255, 255, 255)",
          borderRadius: "10px 10px 25px 10px",
        }
      : padKey === 29
      ? {
          backgroundColor: padColor || "rgb(255, 255, 255)",
          borderRadius: "10px 10px 10px 25px",
        }
      : padKey === 36
      ? {
          backgroundColor: padColor || "rgb(255, 255, 255)",
          borderRadius: "10px 25px 10px 10px",
        }
      : padKey === 37
      ? {
          backgroundColor: padColor || "rgb(255, 255, 255)",
          borderRadius: "25px 10px 10px 10px",
        }
      : {
          backgroundColor: padColor || "rgb(255, 255, 255)",
        };

  return (
    <div style={padStyle} className="pad-container">
      <div className="pad"></div>
    </div>
  );
}
