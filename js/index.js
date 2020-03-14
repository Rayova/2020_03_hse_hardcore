// // circle13
let circleAnimation = anime({
  targets: circle,
  rotate: [0, 360],
  easing: 'linear',
  duration: 50000,
  loop: true
})


// // icon_12
// let iconAnimation = anime ({
//   targets: icon,
//   rotate: [0, 360],
//   autoplay: false,
//   duration: 2000
// })
// let icon01 = document.getElementById('icon')
// icon01.onclick = iconAnimation.play

// alert не работает
function myFunction() {
  let guest1 = prompt("Please enter your name", "Hot stuff");
  if (guest1 != null) {
    document.getElementById("guest").innerHTML = guest1
  }
}

// кнопАчка больше не вертится
let blocks = document.querySelector('.blocks');
let icon = document.querySelector('.icon');
blocks.style.display = 'none'

icon.addEventListener("click",      function() {

    if(blocks.style.display == 'none')  blocks.style.display = 'block';
    else blocks.style.display = 'none'

  });
