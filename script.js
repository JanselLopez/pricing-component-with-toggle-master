const prices = document.getElementsByClassName ('price');
const switcher = document.getElementById ('switch');
let isMonthly = true;

function setPricing () {
  isMonthly = !isMonthly;
  const orientation = isMonthly ? 'flex-end' : 'flex-start';
  switcher.style.justifyContent = orientation;
  let calc = isMonthly ? n => (n - 0.09) / 10 : n => n * 10 + 0.09;
  for (let index = 0; index < prices.length; index++) {
    const element = prices[index];
    const value = element.textContent;
    element.textContent = calc (value).toFixed (2);
  }
}
