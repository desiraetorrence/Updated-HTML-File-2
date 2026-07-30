// Select the button and the hidden section
const aboutButton = document.getElementById("about-button");
const moreAboutMe = document.getElementById("more-about-me");

// Show and hide the "More About Me" section
aboutButton.addEventListener("click", function () {

    if (moreAboutMe.hidden) {
        moreAboutMe.hidden = false;
        aboutButton.textContent = "Show Less";
    } else {
        moreAboutMe.hidden = true;
        aboutButton.textContent = "Learn More About Me";
    }

});
