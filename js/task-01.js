// Посчитает и выведет в консоль количество категорий в ul#categories

const itemByIdCategories = document.querySelector("#categories");

console.log(`В списке ${itemByIdCategories.children.length} категории.`);

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

const itemsByIdCategories = document.querySelectorAll(".item");

itemsByIdCategories.forEach((item) => {
  let h2ByItem = item.querySelector("h2");
  console.log(`Категория: ${h2ByItem.textContent}`);
  let itemsEl = item.querySelectorAll("li");
  console.log(`Количество элементов: ${itemsEl.length}`);
});
