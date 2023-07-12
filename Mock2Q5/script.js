document.addEventListener("DOMContentLoaded", function() {
    const inputBox = document.getElementById("input-box");
    const submitButton = document.getElementById("submit-btn");
    const itemsList = document.getElementById("items-list");
  
    submitButton.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent form submission
  
      const newItem = document.createElement("li");
      newItem.textContent = inputBox.value;
      itemsList.appendChild(newItem);
      inputBox.value = "";
    });
  });
  