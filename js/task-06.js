const inputEl = document.querySelector("input");
const inputLengthEl = document.querySelector('[data-length="6"]');

inputEl.addEventListener("blur", (event) => {
  inputEl.textContent = event.currentTarget.value;
  const inputContentLength = inputEl.textContent;

  if (inputContentLength.length === +inputLengthEl.dataset.length) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  }
  if (inputContentLength.length !== +inputLengthEl.dataset.length) {
    inputEl.classList.add("invalid");
  }
});
