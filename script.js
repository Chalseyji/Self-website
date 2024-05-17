  // JavaScript for image enlargement on click
document.querySelectorAll(".gallery-image").forEach(function(img) {
  img.addEventListener("click", function() {
    this.classList.toggle("enlarged");
  });
});

// JavaScript for login button functionality
document.getElementById("loginButton").addEventListener("click", function() {
  document.getElementById("loginSection").classList.toggle("hidden");
});

// JavaScript for download button functionality
document.querySelectorAll(".download-button").forEach(function(button) {
  button.addEventListener("click", function() {
    const img = this.previousElementSibling;
    const link = document.createElement('a');
    link.href = img.src;
    link.download = img.alt;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});

// JavaScript for burger menu functionality
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
  burger.classList.toggle('toggle');
});

// Add SVG elements to the animated header
const animatedHeaderElements = document.querySelector('.animated-header-elements');
const headerSvgElements = [
  '<svg class="svg-camera" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 5h-3.586l-1.707-1.707A.996.996 0 0 0 14 3H10a.996.996 0 0 0-.707.293L7.586 5H4v14h16v-14zM12 17.07L10.07 15 7.07 17.07 8.93 19 12 17.07z"></path></svg>',
  '<svg class="svg-camera" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 5h-3.586l-1.707-1.707A.996.996 0 0 0 14 3H10a.996.996 0 0 0-.707.293L7.586 5H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zm0 13H4V7h3.586l1.707 1.707A.996.996 0 0 0 10 9h4a.996.996 0 0 0 .707-.293L16.414 7H20v11zm-6-4.293-1.707 1.707A.996.996 0 0 1 12 16H8c-.552 0-1-.449-1-1v-2c0-.551.448-1 1-1h4c.552 0 1 .449 1 1v2c0 .266-.105.518-.293.707z"/></svg>',
    '<svg class="svg-light" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2c-1.103 0-2 .897-2 2v3c0 1.103.897 2 2 2s2-.897 2-2V4c0-1.103-.897-2-2-2zm0 6c-.552 0-1-.449-1-1V4c0-.551.448-1 1-1s1 .449 1 1v3c0 .551-.448 1-1 1zm6.293-3.707L16 2.586l-2.293 2.293a.996.996 0 0 0-.293.707V8h4V4.293c0-.266-.105-.518-.293-.707zM18 4.293c0 .266-.105.518-.293.707L16 6.414 13.707 4.121a.996.996 0 0 0-.707-.293H8V8h4c.266 0 .518.105.707.293L16 10.586l1.293-1.293a.996.996 0 0 0 .293-.707V4.293zM8 6H6V4.293L4.707 5.586a.996.996 0 0 1-.707.293H2v2h4V4c0-.552.448-1 1-1s1 .448 1 1v2z"/></svg>',
  // Add more SVG elements to the array as needed
];

headerSvgElements.forEach(function(svgElement) {
  const svg = document.createElement('div');
  svg.innerHTML = svgElement;
  animatedHeaderElements.appendChild(svg.firstElementChild);
});

// JavaScript to open the form in a new window when the login button is clicked
document.getElementById("loginButton").addEventListener("click", function() {
  // Replace the URL with your Google Form URL
  var formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeMT5Bdrny2TzQ2aVV2Ah0H4Mj8N0vJB2P9pF6MT2WQmJCnTw/viewform?usp=sf_link";
  // Open the form in a new window
  window.open(formUrl, "_blank", "width=640,height=2623");
});

// JavaScript to handle the download button click event
document.querySelectorAll(".download-button").forEach(function(button) {
  button.addEventListener("click", function() {
      // Get the image source
      var imageUrl = this.parentNode.querySelector(".gallery-image").src;
      // Create an anchor element
      var link = document.createElement("a");
      // Set the href attribute to the image source
      link.href = imageUrl;
      // Set the download attribute to the image filename
      link.download = "photo19.jpg"; // Replace with the actual filename
      // Simulate a click on the anchor element to trigger the download
      link.click();
  });
});
