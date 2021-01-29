// window.addEventListener("DOMContentLoaded", event => {
//     const audio = document.querySelector("audio");
//     audio.volume = 0.2;
//     audio.play();
//   });

//window.addEventListener("DOMContentLoaded", event => {
//    return new Promise(() => {
//       setTimeout(() => {
//         const audio = document.querySelector("audio");
//       audio.volume = 0.2;
//     audio.play();
//   }, 1000);
//  });
//});


setTimeout(function() {
    document.getElementById("my_audio").play();

}, 1000)