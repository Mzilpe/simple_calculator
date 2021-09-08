const inputEl = document.querySelector('.inputNumber');
const equal = document.querySelector('.btn--eq');
const btnClear = document.querySelector('.btn--clear');

btnClear.addEventListener('click', function () {
  inputEl.value = null;
});

const show = () => {
  const getEq = inputEl.value;
  const solveEq = eval(getEq);
  inputEl.value = solveEq;
};

equal.addEventListener('click', show);

const display = (val) => {
  inputEl.value += val;
};
