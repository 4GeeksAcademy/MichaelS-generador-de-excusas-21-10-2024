/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = [
    "El fantasma",
    "Mi hermano disfrazado",
    "La bruja vecina",
    "El zombie"
  ];
  let action = ["asustó", "robó", "encantó", "desapareció"];
  let what = ["mis caramelos", "mi disfraz", "la calabaza", "mi linterna"];
  let when = [
    "antes de la fiesta",
    "cuando estaba buscando dulces",
    "mientras decoraba",
    "durante la noche de brujas"
  ];
  function generador() {
    let randonwho = who[Math.floor(Math.random() * who.length)];
    let randonaction = action[Math.floor(Math.random() * action.length)];
    let randonwhat = what[Math.floor(Math.random() * what.length)];
    let randonwhen = when[Math.floor(Math.random() * when.length)];

    return randonwho + " " + randonaction + " " + randonwhat + " " + randonwhen;
  }
  //console.log("Hello Rigo from the console!");
  let parrafo = document.getElementById("excuse");
  parrafo.innerText = generador();
};
