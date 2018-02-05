// When the user scrolls down 500px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("top").style.display = "block";
  } else {
    document.getElementById("top").style.display = "none";
  }
}

function scroll(link, section) {
  document.querySelector(link).addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(section).scrollIntoView({ behavior: 'smooth' });
  });
}
scroll('#top','header');