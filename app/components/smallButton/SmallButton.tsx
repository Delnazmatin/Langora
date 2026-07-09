import "@/app/components/smallButton/style.css";
import { ButtonProps } from "@/app/page";

export default function SmallButton({ text }: ButtonProps) {
  return <button className="smallButton">{text}</button>;
}
