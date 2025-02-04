// function update(event) {
//   for (let dot; (dot = document.querySelector("dot")); ) {
//     dot.remove();
//   }

//   for (let i = 0; i < event.touches.length; i++) {
//     let { pageX, pageY } = event.touches[i];
//     let dot = document.createElement("dot");
//     dot.style.left = pageX - 50 + "px";
//     dot.style.top = pageY - 50 + "px";
//     document.body.appendChild(dot);
//   }
// }
// window.addEventListener("touchstart", update);
// window.addEventListener("touchmove", update);
// window.addEventListener("touchend", update);

function update(event) {
  // Remove existing dots before creating new ones
  document.querySelectorAll(".dot").forEach((dot) => dot.remove());

  for (let i = 0; i < event.touches.length; i++) {
    let { pageX, pageY } = event.touches[i];
    let dot = document.createElement("div"); // Use a valid HTML tag
    dot.className = "dot"; // Assign the CSS class

    dot.style.left = pageX - 50 + "px";
    dot.style.top = pageY - 50 + "px";
    document.body.appendChild(dot);
  }
}

// Listen for touch events
window.addEventListener("touchstart", update);
window.addEventListener("touchmove", update);
window.addEventListener("touchend", update);
