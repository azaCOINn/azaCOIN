let count = 0;
const counterEl = document.getElementById('counter');
const tapBtn = document.getElementById('tapBtn');

tapBtn.addEventListener('click', () => {
  count++;
  counterEl.textContent = count;
});
