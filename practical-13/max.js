// Get references to the radio buttons and the boxes
const radioBtns = document.querySelectorAll('input[type="radio"]');
const boxes = document.querySelectorAll('.boxs');

// Add an event listener to each radio button
radioBtns.forEach((radioBtn) => {
  radioBtn.addEventListener('change', () => {
    // Get the index of the selected radio button
    let selectedIndex;
    for (let i = 0; i < radioBtns.length; i++) {
      if (radioBtns[i].checked) {
        selectedIndex = i;
        break;
      }
    }
    
    // Hide all the boxes except the one corresponding to the selected radio button
    for (let i = 0; i < boxes.length; i++) {
      if (i === selectedIndex) {
        boxes[i].style.display = 'block';
      } else {
        boxes[i].style.display = 'none';
      }
    }
  });
});

