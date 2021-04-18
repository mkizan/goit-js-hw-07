const refs = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  valueEl: document.querySelector("#value"),
};

const counter = {
  value: 0,
  decrement() {
    this.value -= 1;
  },
  increment() {
    this.value += 1;
  },
};

refs.decrementBtn.addEventListener("click", () => {
  counter.decrement();
  refs.valueEl.textContent = counter.value;
});

refs.incrementBtn.addEventListener("click", () => {
  counter.increment();
  refs.valueEl.textContent = counter.value;
});
