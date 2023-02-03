// document.getElementById('anchor').onclick = function () {
//   document.location.href = 'https://site#form';
// };
console.log(document.querySelector('.js-menu-link'));
document.querySelector('.js-menu-link').addEventListener('click', () => {
  window.location.href =
    'https://melnykovsv.github.io/markup-project-team1/restaurant.html#menu';
});
