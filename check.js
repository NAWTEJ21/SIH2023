
document.addEventListener("click", function(event) {
    const dropdown = document.querySelector(".dropdown");
    if (event.target.matches(".btn-dropdown")) {
      const dropdownContent = dropdown.querySelector(".dropdown-content");
      dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
    } else if (!dropdown.contains(event.target)) {
      const dropdownContent = dropdown.querySelector(".dropdown-content");
      dropdownContent.style.display = "none";
    }
  });
  