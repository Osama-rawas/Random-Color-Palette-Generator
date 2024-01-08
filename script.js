const refreshBtn = document.querySelector(".refresh-btn");
const maxPaletteBoxes = 32;
const container = document.querySelector(".container");
generatePlaette();
function generatePlaette() {
  container.innerHTML = "";
  for (let i = 0; i < maxPaletteBoxes; i++) {
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    randomHex = `#${randomHex.padStart(6, "0")}`;
    const color = document.createElement("li");
    color.classList.add("color");
    color.innerHTML = `<div class="rect-box" style= background-color:${randomHex}></div>
    <span class="hex-value">${randomHex}</span>`;

    color.addEventListener("click", () => copyColor(color, randomHex));
    container.appendChild(color);
  }
}
const copyColor = (element, hexValue) => {
  const colorElement = element.querySelector(".hex-value");
  navigator.clipboard
    .writeText(hexValue)
    .then(() => {
      colorElement.innerHTML = "copied";
      setTimeout(() => (colorElement.innerHTML = hexValue), 1000);
    })
    .catch(() => alert("Failed to copy the color code!"));
};
refreshBtn.addEventListener("click", generatePlaette);
