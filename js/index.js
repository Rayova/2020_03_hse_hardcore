// // circle13
// let circleAnimation = anime({
//   targets: circle,
//   rotate: [0, 360],
//   easing: 'linear',
//   duration: 50000,
//   loop: true
// })
//

// // icon_12
// let iconAnimation = anime ({
//   targets: icon,
//   rotate: [0, 360],
//   autoplay: false,
//   duration: 2000
// })
// let icon01 = document.getElementById('icon')
// icon01.onclick = iconAnimation.play

// alert
function myFunction() {
  let person = prompt("Please enter your name", "Hot stuff");
  if (person != null) {
    document.getElementById("guest").innerHTML =
    "Hello " + person + "! How are you today?";
  }
}
