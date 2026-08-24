import BigButton from "@/app/components/bigButton/BigButton";
import Box from "@/app/components/box/Box";
import "@/app/dashboard/addWord/style.css";
import addWord from "@/app/assets/images/addWord.jpg";
import Image from "next/image";

export default function AddWord() {
  return (
    <div className="addWordContainer">
      <div className="addWordPicture">
        <Image src={addWord} alt="add word" width={100} height={150} />
      </div>
      <form className="addWordForm">
        <div className="textInput">
          <label>Word</label>
          <input type="text"></input>
        </div>
        <div className="areaInput">
          <label>Describe or Meaning</label>
          <textarea />
        </div>
        <div className="boxContainer">
          <Box />
        </div>
        <div className="addButton">
          <BigButton text="Add" type={"button"} />
        </div>
      </form>
    </div>
  );
}
