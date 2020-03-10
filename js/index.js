// circle13
let circleAnimation = anime({
  targets: circle,
  rotate: [0, 360],
  easing: 'linear',
  duration: 50000,
  loop: true
})
// runs
// let runAnimation = anime({
//   targets: run,
//   translateX: 800,
//   direction: 'alternate',
//   loop: true,
//   easing: 'linear',
//   duration: 5000
// });
let runAnimation = anime({
  targets: run,
  translateX: 800,
  direction: 'alternate',
  loop: true,
  easing: 'steps(5)'
})
// let run1Animation = anime({
//   targets: run1,
//   translateX: 800,
//   direction: 'alternate',
//   loop: true,
//   easing: 'linear',
//   duration: 5000
// });
// let run2Animation = anime({
//   targets: run2,
//   translateX: 800,
//   direction: 'alternate',
//   loop: true,
//   easing: 'linear',
//   duration: 4000
// });
// let run3Animation = anime({
//   targets: run3,
//   translateX: 800,
//   direction: 'alternate',
//   loop: true,
//   easing: 'linear',
//   duration: 35000
// });
// let run4Animation = anime({
//   targets: run4,
//   translateX: 800,
//   direction: 'alternate',
//   loop: true,
//   easing: 'linear',
//   duration: 4000
// });
// let run5Animation = anime({
//   targets: run5,
//   translateX: 800,
//   direction: 'alternate',
//   loop: true,
//   easing: 'linear',
//   duration: 2000
// });
// let run6Animation = anime({
//   targets: run6,
//   translateX: 800,
//   direction: 'alternate',
//   loop: true,
//   easing: 'linear',
//   duration: 1200
// });
// let run7Animation = anime({
//   targets: run7,
//   translateX: 800,
//   direction: 'alternate',
//   loop: true,
//   easing: 'linear',
//   duration: 4330
// });
// let run8Animation = anime({
//   targets: run8,
//   translateX: 800,
//   direction: 'alternate',
//   loop: true,
//   easing: 'linear',
//   duration: 3500
// });
// let run9Animation = anime({
//   targets: run9,
//   translateX: 800,
//   direction: 'alternate',
//   loop: true,
//   easing: 'linear',
//   duration: 2000
// });

// icon_12
let iconAnimation = anime ({
  targets: icon,
  rotate: [0, 360],
  autoplay: false,
  duration: 2000
})
let icon01 = document.getElementById('icon')
icon01.onclick = iconAnimation.play
