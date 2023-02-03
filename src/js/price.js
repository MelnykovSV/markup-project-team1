const days = document.querySelector('#apartment-price-nights');
const price = document.querySelector('#apartment-price-price');

if (price) {
  days.addEventListener('change', () => {
    price.value = days.value * 1000;
  });
}
