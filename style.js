window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");
  const video = document.getElementById("loadingVideo");

  // Stop looping via JS
  video.removeAttribute("loop");

  // When video ends, fade out loader & then show content
  video.addEventListener("ended", () => {
    loader.classList.add("fade-out");

    // Wait for transition (1s) then hide loader
    setTimeout(() => {
      loader.style.display = "none";
      content.style.display = "block";
    }, 1000);
  });
});
