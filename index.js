let toggle = document.getElementById("toggle");
let heading = document.getElementById("heading");
toggle.addEventListener("click", () => {
  for (let i = 1; i < 6; i++) {
    let bulbimg = document.getElementById(`light${i}`);
    if (bulbimg.src.match("bulboff")) {
      bulbimg.src = "bulbon.jpg";
      heading.innerHTML = "LIGHT ON";
      heading.style.color = "red";
      toggle.style.backgroundColor = "red";
    } else {
      bulbimg.src = "bulboff.jpg";
      heading.innerHTML = "LIGHT OFF";
      heading.style.color = "black";
      toggle.style.backgroundColor = "green";
    }
  }
});
