const home = document.getElementById("home-btn");
if (home) {
  home.addEventListener("click", function () {
    window.location.href = "index.html";
  });
}
document.getElementById("blog-btn").addEventListener("click", function () {
  window.location.href = "blog.html";
});
