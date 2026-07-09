import Link from "next/link";
import BigButton from "./components/bigButton/BigButton";
import Image from "next/image";
import startLogo from "@/app/assets/images/startLogo.jpg";

export type ButtonProps = {
  text: string;
};

export default function Home() {
  return (
    <div className="container">
      <div className="logoOfStartPage">
        <Image src={startLogo} alt="logo" width={200} height={300} />
      </div>
      <h1>Welcome to Langora</h1>

      <div className="startButtonContainer">
        <Link href="/signup">
          <BigButton text="Get Start" />
        </Link>
        <Link href="/login">
          <BigButton text="I already have an account" />
        </Link>
      </div>
    </div>
  );
}
