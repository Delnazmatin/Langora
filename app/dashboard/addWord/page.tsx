import SmallButton from "@/app/components/smallButton/SmallButton";
import "@/app/dashboard/addWord/style.css";

export default function AddWord() {
  return (
    <div className="addWordContainer">
      <h2>Add new Word</h2>
      <div>
        <form className="addWordForm">
          <div className="textInput">
            <label>Word</label>
            <input type="text"></input>
          </div>
          <div className="areaInput">
            <label>Describe or Meaning</label>
            <textarea></textarea>
          </div>
          <div className="addButton">
            <SmallButton text="Add" />
          </div>
        </form>
      </div>
    </div>
  );
}
