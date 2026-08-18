"use client";
import "@/app/setLevel/style.css";
import Image from "next/image";
import { FaCircle, FaRegCircle } from "react-icons/fa";
import LevelLogo from "@/app/assets/images/levelLogo.jpg";
import BigButton from "../components/bigButton/BigButton";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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
          <span>Beginner</span>
          <span>
            <FaCircle />
            <FaRegCircle />
            <FaRegCircle />
            <FaRegCircle />
          </span>
        </div>
        <div
          className="levels level2"
          onClick={() => {
            setLevel("Elementary");
          }}
        >
          <span>Elementary</span>
          <span>
            <FaCircle />
            <FaCircle />
            <FaRegCircle />
            <FaRegCircle />
          </span>
        </div>
        <div
          className="levels level3"
          onClick={() => {
            setLevel("Intermediate");
          }}
        >
          <span>Intermediate</span>
          <span>
            <FaCircle />
            <FaCircle />
            <FaCircle />
            <FaRegCircle />
          </span>
        </div>
        <div
          className="levels level4"
          onClick={() => {
            setLevel("Advanced");
          }}
        >
          <span>Advanced</span>
          <span>
            <FaCircle />
            <FaCircle />
            <FaCircle />
            <FaCircle />
          </span>
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
