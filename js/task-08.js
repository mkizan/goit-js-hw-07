const amount = document.querySelector("input");
const actionRender = document.querySelector('[data-action="render"]');
const actionDestroy = document.querySelector('[data-action="destroy"]');
const boxesEl = document.querySelector("#boxes");

actionRender.addEventListener("click", () => createBoxes(amount.value));
actionDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let arrayOfBoxes = [];
  function createRandomRgb() {
    const randomRgb = () => Math.floor(Math.random() * 256);

    const r = randomRgb();
    const g = randomRgb();
    const b = randomRgb();

    return `rgb(${r},${g},${b})`;
  }
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = createRandomRgb();
    arrayOfBoxes.push(box);
  }
  return boxesEl.append(...arrayOfBoxes);
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
}
