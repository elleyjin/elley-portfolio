window.addEventListener("load", function () {
  var contactButton = document.getElementById("contact-button");
  var emailSection = document.getElementById("email");

  contactButton.addEventListener("click", function () {
    emailSection.classList.add("highlight");

    setTimeout(function () {
      emailSection.classList.remove("highlight");
    }, 3000);
  });
});
