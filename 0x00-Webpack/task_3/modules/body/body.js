import $ from "jquery";
import _ from "lodash";

// Add button
const button = document.createElement("button");
button.textContent = "Click me";
document.body.appendChild(button);

// Counter using Lodash
let count = 0;
const increment = _.throttle(() => {
  count++;
  console.log(`Count: ${count}`);
}, 1000);

button.addEventListener("click", increment);

