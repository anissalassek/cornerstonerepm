

$(document).ready(function() {
    $(".hamburger-button").click(function() {
        $(this).toggleClass("active");
        $(".mobile-menu").fadeToggle();
    });

    $(".close-button").click(function() {
        $(".hamburger-button").removeClass("active");
        $(".mobile-menu").fadeOut();
    });

    // Hide close button initially
    $(".close-button").hide();

    AOS.init();
    
    // Add a click event to the links in the mobile menu to close the menu when clicked
    $(".mobile-menu a").click(function() {
        $(".hamburger-button").removeClass("active");
        $(".mobile-menu").fadeOut();
    });
    
    // Add a click event to the document body to close the menu when clicked outside
    $(document.body).click(function(event) {
        // Check if the clicked element is not part of the mobile menu or the hamburger button
        if (!$(event.target).closest('.mobile-menu').length && !$(event.target).closest('.hamburger-button').length) {
            $(".hamburger-button").removeClass("active");
            $(".mobile-menu").fadeOut();
        }
    });
});


/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


  //* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}




