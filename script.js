// Switches the light / dark colours by adding or removing the class "dark" on the page.
// The colours for "dark" are defined in style.css.
document.getElementById("theme-button").addEventListener("click", function () {
  document.body.classList.toggle("dark");
});
