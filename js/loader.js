// Function to hide the loader after a delay
function hideLoader() {
    var loaderContainer = document.getElementById("loader");
    var portfolio = document.querySelector(".portfolio-content");
  
    // Hide the loader
    loaderContainer.style.display = "none";
    // Show the portfolio content
    portfolio.style.display = "block"
  }
  
  // Set a timeout to hide the loader after 3 seconds (adjust as needed)
  setTimeout(hideLoader, 3000)