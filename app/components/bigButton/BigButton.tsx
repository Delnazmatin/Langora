import "@/app/components/bigButton/style.css";

type BigButtonType = {
  text: string;
  onClick?: () => void;
  type: "submit" | "button";
  disabled?: boolean;
};

export default function BigButton({
  text,
  onClick,
  type,
  disabled = false,
}: BigButtonType) {
  return (
    <button
      className="bigButton"
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
