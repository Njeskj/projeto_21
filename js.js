// const elementosDuvida = document.querySelectorAll('.item');

// elementosDuvida.forEach(function (item) {
//   item.addEventListener('click', function () {
//     item.classList.toggle('ativa');
//   });
// });



const elementosDuvida = document.querySelectorAll('.item');

elementosDuvida.forEach(function (item) {
  const titulo = item.querySelector('h3');

  titulo.addEventListener('click', function () {
    item.classList.toggle('ativa');
  });
});
