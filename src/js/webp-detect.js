Modernizr.on('webp', function (result) {
  const bgs = document.querySelectorAll('.js-bg');

  if (result) {
    // bgs.forEach(ele => {
    //   ele.classList.add('webp');
    // });
  } else {
    bgs.forEach(ele => {
      ele.classList.add('no-webp');
    });
  }
});
