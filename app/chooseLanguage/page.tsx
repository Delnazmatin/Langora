"use client";
import "@/app/chooseLanguage/style.css";
import { languages } from "@/app/data/dataOfCountry";
import { LanguageType } from "@/app/data/dataOfCountry";
import Image from "next/image";
import LanguageLogo from "@/app/assets/images/languageLogo.jpg";
import BigButton from "../components/bigButton/BigButton";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ChooseLanguage() {
  const [country, setCountry] = useState<string>("");

  useEffect(() => {
    if (country) {
      alert(`Language: ${country}`);
    }
  }, [country]);
  return (
    <div className="chooseLanguageContainer">
      <div className="chooseLanguageContent">
        <div className="chooseLanguageLogo">
          <Image src={LanguageLogo} alt="logo" width={100} height={100} />
        </div>
        <div className="chooseLanguageHeader">
          <h2>Choose Your Language</h2>
        </div>
        <div className="languageContainer">
          <ul>
            {languages.map((language: LanguageType) => {
              return (
                <>
                  <li
                    id={language.id}
                    key={language.id}
                    onClick={() => {
                      setCountry(language.name);
                    }}
                  >
                    <div className="countryFlag">{language.flag}</div>
                    <div className="countryName">{language.name}</div>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
        <div className="chooseLanguageButton">
          <Link href="/setLevel">
            <BigButton text="Continue" />
          </Link>
        </div>
      </div>
    </div>
  );
}
