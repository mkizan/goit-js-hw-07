const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const listEl = document.querySelector("#ingredients");

const arr = ingredients.map((ingredient) => {
  let itemsEl = document.createElement("li");
  itemsEl.textContent = ingredient;
  return itemsEl;
});

listEl.append(...arr);
