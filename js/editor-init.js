document.addEventListener("DOMContentLoaded", function(event) {
  console.log("Initializing editor");
  var simplemde = new SimpleMDE({ element: document.getElementById("markdownEditor") });
});