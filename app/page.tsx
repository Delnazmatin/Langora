import Link from "next/link";
import BigButton from "./components/bigButton/BigButton";
import Image from "next/image";
import startLogo from "@/app/assets/images/startLogo.jpeg";

export default function Home() {
  return (
    <div className="container">
      <div className="logoOfStartPage">
        <Image src={startLogo} alt="logo" width={200} height={300} />
      </div>
      <h1>Welcome to Langora</h1>

      <div className="startButtonContainer">
        <Link href="/signup">
          <BigButton text="Get Start" type="button" />
        </Link>
        <Link href="/login">
          <BigButton text="I already have an account" type="button" />
        </Link>
      </div>
    </div>
  );
}
