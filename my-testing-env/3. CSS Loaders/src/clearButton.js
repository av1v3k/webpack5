import "./clearButton.css";
import style from "./clearButton.css";
console.log(style);
let btn = document.createElement("button");
btn.innerHTML = "Clear";
btn.classList.add("button");
btn.onclick = () => {
    console.log('Clear');
}

document.body.appendChild(btn);