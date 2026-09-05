"use client";
import "@/app/setLevel/style.css";
import Image from "next/image";
import LevelLogo from "@/app/assets/images/levelLogo.jpeg";
import BigButton from "../components/bigButton/BigButton";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { PiStarBold } from "react-icons/pi";

export default function SetLevel() {
  const [level, setLevel] = useState<string>("");
  const route = useRouter();
  useEffect(() => {
    if (level) {
      alert(`Level: ${level}`);
    }
  }, [level]);

  function handleContinue() {
    if (!level) {
      return;
    }
    route.push("/dashboard");
  }

  return (
    <div className="levelContainer">
      <div className="levelContent">
        <div className="logoLevel">
          <Image src={LevelLogo} alt="logo" width={50} height={50} />
        </div>
        <h2>Choose Your Level</h2>
        <div
          className="levels level1"
          onClick={() => {
            setLevel("Beginner");
          }}
        >
          <span>
            <PiStarBold />
          </span>
          <span>Beginner</span>
        </div>
        <div
          className="levels level2"
          onClick={() => {
            setLevel("Elementary");
          }}
        >
          <span>
            <PiStarBold />
            <PiStarBold />
          </span>
          <span>Elementary</span>
        </div>
        <div
          className="levels level3"
          onClick={() => {
            setLevel("Intermediate");
          }}
        >
          <span>
            <PiStarBold />
            <PiStarBold />
            <PiStarBold />
          </span>
          <span>Intermediate</span>
        </div>
        <div
          className="levels level4"
          onClick={() => {
            setLevel("Advanced");
          }}
        >
          <span>
            <PiStarBold />
            <PiStarBold />
            <PiStarBold />
            <PiStarBold />
          </span>
          <span>Advanced</span>
        </div>

        <BigButton
          text="Continue"
          type="button"
          onClick={handleContinue}
          disabled={!level}
        />
      </div>
    </div>
  );
}
