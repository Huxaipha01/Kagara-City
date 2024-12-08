// auto type text
document.addEventListener("DOMContentLoaded", function () {
  var typedText = document.getElementById("typed-text");
  var text = typedText.textContent;
  typedText.textContent = "";
  var i = 0;
  var speed = 50;

  function type() {
    if (i < text.length) {
      typedText.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
});

// Back to Top
window.addEventListener("scroll", function () {
  var backToTopButton = document.getElementById("back-to-top");
  if (window.scrollY > 300) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
