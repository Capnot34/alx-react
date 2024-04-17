import $ from "jquery";

// Add logo
const logo = document.createElement("img");
logo.src = "./assets/holberton-logo.jpg";
document.querySelector("header").appendChild(logo);

// Add H1 title
const h1 = document.createElement("h1");
h1.textContent = "Holberton Dashboard";
document.querySelector("header").appendChild(h1);

// Console log
console.log("Init header");
