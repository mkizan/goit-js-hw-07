const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (event) =>
  event.currentTarget.value === ""
    ? (outputEl.textContent = "незнакомец")
    : (outputEl.textContent = event.currentTarget.value)
);
