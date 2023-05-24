const southmap = document.querySelector(".south-map");
const northmap = document.querySelector(".north-map");
const westmap = document.querySelector(".west-map");
const eastmap = document.querySelector(".east-map");
const map1 = document.querySelector(".map1");
const map2 = document.querySelector(".map2");
const map3 = document.querySelector(".map3");
const map4 = document.querySelector(".map4");

southmap.addEventListener('click', function(){
  southmap.style.display = "flex";
  northmap.style.display = "flex";
  westmap.style.display = "flex";
  eastmap.style.display = "flex";
  map1.style.display = "none";
  map2.style.display = "flex";
  map3.style.display = "none";
  map4.style.display = "none";
})

northmap.addEventListener('click', function(){
  southmap.style.display = "flex";
  northmap.style.display = "flex";
  westmap.style.display = "flex";
  eastmap.style.display = "flex";
  map1.style.display = "none";
  map2.style.display = "none";
  map3.style.display = "flex";
  map4.style.display = "none";
})

westmap.addEventListener('click', function(){
  southmap.style.display = "flex";
  northmap.style.display = "flex";
  westmap.style.display = "flex";
  eastmap.style.display = "flex";
  map1.style.display = "none";
  map2.style.display = "none";
  map3.style.display = "none";
  map4.style.display = "flex";
})

eastmap.addEventListener('click', function(){
  southmap.style.display = "flex";
  northmap.style.display = "flex";
  westmap.style.display = "flex";
  eastmap.style.display = "flex";
  map1.style.display = "flex";
  map2.style.display = "none";
  map3.style.display = "none";
  map4.style.display = "none";
})