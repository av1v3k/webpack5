import "./clearButton.css";

let btn = document.createElement("button");
btn.innerHTML = "Clear";
btn.classList.add("button");
btn.onclick = () => {
    console.log('Clear');
}

document.body.appendChild(btn);