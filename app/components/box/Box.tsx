import "@/app/components/box/style.css";
import { DataOfBoxes } from "@/app/data/dataOfBox";

export default function Box() {
  return (
    <div className="boxContent">
      <ul>
        {DataOfBoxes.map((box) => {
          const Icon = box.icon;
          return (
            <li key={box.text} style={{ backgroundColor: box.color }}>
              <span>
                <Icon size={28} />
              </span>
              <span>{box.text}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
