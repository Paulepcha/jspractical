// Get the buttons and sections from the HTML code
const proceedBtn1 = document.querySelector('#next-btn');
const proceedBtn2 = document.querySelector('#next-btne'); 
const proceedBtn3 = document.querySelector('#next-btns');
const backBtn2 = document.querySelector('#prev-btn');

const section1 = document.querySelector('.form-cover');
const section2 = document.querySelector('.form-cover2');
const section3 = document.querySelector('.form-cover3');
const lastBackButt =  document.querySelector('.form-cov-butt');

// Add event listeners to the buttons
proceedBtn1.addEventListener('click', function() {
  section1.style.display = 'none';    
  section2.style.display = 'flex';
});

proceedBtn2.addEventListener('click', function() {
  section2.style.display = 'none';
  section3.style.display = 'flex';
  section1.style.display = 'none';
});



backBtn2.addEventListener('click', function() {
  section2.style.display = 'flex';
  section1.style.display = 'none';
  section3.style.display = 'none';
});

lastBackButt.addEventListener('click', function() {
  section3.style.display = 'none';
  section1.style.display = 'flex'; 
  section2.style.display = 'none'; 
});

// radio button js//
  // const radioBtn1 = document.getElementById("radio-btn");
  // const radioBtn2 = document.getElementById("radio-btn2");
  // const radioBtn3 = document.getElementById("radio-btn3");
  // const box1 = document.querySelector(".boxs");
  // const box2 = document.querySelector(".boxe");
  // const box3 = document.querySelector(".boxt");

  // // Add event listeners to the radio buttons
  // radioBtn1.addEventListener("change", function() {
  //   if (radioBtn1.checked) {
  //     box1.style.display = "block";
  //     box2.style.display = "none";
  //     box3.style.display = "none";
  //   }
  // });

  // radioBtn2.addEventListener("change", function() {
  //   if (radioBtn2.checked) {
  //     box1.style.display = "none";
  //     box2.style.display = "block";
  //     box3.style.display = "none";
  //   }
  // });

  // radioBtn3.addEventListener("change", function() {
  //   if (radioBtn3.checked) {
  //     box1.style.display = "none";
  //     box2.style.display = "none";
  //     box3.style.display = "block";
  //   }
  // });

