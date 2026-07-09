import "@/app/components/bigButton/style.css";
import { ButtonProps } from "@/app/page";

export default function BigButton({ text }: ButtonProps) {
  return (
    <button className="bigButton" type="submit">
      {text}
    </button>
  );
}
