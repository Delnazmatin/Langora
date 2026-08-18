"use client";
import "@/app/chooseLanguage/style.css";
import { languages } from "@/app/data/dataOfCountry";
import { LanguageType } from "@/app/data/dataOfCountry";
import Image from "next/image";
import LanguageLogo from "@/app/assets/images/languageLogo.jpg";
import BigButton from "../components/bigButton/BigButton";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ChooseLanguage() {
  const [country, setCountry] = useState<string>("");
  const route = useRouter();

  useEffect(() => {
    if (country) {
      alert(`Language: ${country}`);
    }
  }, [country]);

  function handleContinue() {
    if (!country) {
      return;
    }
    route.push("/setLevel");
  }

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
          <BigButton
            text="Continue"
            type="submit"
            onClick={handleContinue}
            disabled={!country}
          />
        </div>
      </div>
    </div>
  );
}
