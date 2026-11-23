const headlinesTrack = document.querySelector(".headlines__track");
const originalHeadlines = Array.from(document.querySelectorAll(".headline"));

originalHeadlines.forEach((h, i) => {
  // Alternating vertical spacing
  if (i % 2 == 0) {
    h.style.marginBottom = "4rem";
  } else {
    h.style.marginTop = "4rem";
  }
  
  // Random rotation from -10 to 10 deg
  const randomDeg = (Math.random() * 20) - 10;
  h.style.transform = `rotateZ(${randomDeg}deg)`;
})

// Clones that allow infinite autoscrolling
const clonedHeadlines = originalHeadlines.map(h => h.cloneNode(true));

headlinesTrack.append(...clonedHeadlines)
