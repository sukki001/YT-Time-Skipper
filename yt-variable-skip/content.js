let skipSeconds = 5;

// Load saved skip time
chrome.storage.sync.get("skipTime", (data) => {
  if (data.skipTime) skipSeconds = data.skipTime;
});

// Update if user changes value
chrome.storage.onChanged.addListener((changes) => {
  if (changes.skipTime) {
    skipSeconds = changes.skipTime.newValue;
  }
});

// Create floating skip indicator
function createIndicator() {
  const container =
    document.querySelector(".html5-video-player") ||
    document.querySelector("#movie_player");

  if (!container) return null;

  const indicator = document.createElement("div");
  indicator.style.position = "absolute";
  indicator.style.top = "50%";
  indicator.style.fontSize = "28px";
  indicator.style.fontWeight = "bold";
  indicator.style.color = "white";
//   indicator.style.background = "rgba(0,0,0,0.7)";
  indicator.style.padding = "20px 40px";
  indicator.style.borderRadius = "10px";
  indicator.style.display = "none";
  indicator.style.zIndex = "9999";
  indicator.style.pointerEvents = "none";
  indicator.style.transform = "translateY(-50%)";

  container.style.position = "relative"; // important
  container.appendChild(indicator);

  return indicator;
}


let indicator = createIndicator();



function showIndicator(text, direction) {
  if (!indicator) {
    indicator = createIndicator();
    if (!indicator) return;
  }

  indicator.innerText = text;

  if (direction === "forward") {
    indicator.style.right = "10%";
    indicator.style.left = "auto";
  } else {
    indicator.style.left = "10%";
    indicator.style.right = "auto";
  }

  indicator.style.display = "block";
  indicator.style.opacity = "1";

  setTimeout(() => {
    indicator.style.opacity = "0";
    setTimeout(() => {
      indicator.style.display = "none";
    }, 300);
  }, 500);
}



// Capture keys BEFORE YouTube
document.addEventListener("keydown",(event) => {
    const video = document.querySelector("video");
    if (!video) return;

    if (event.key === "ArrowRight") {
      event.preventDefault();
      event.stopPropagation();

      video.currentTime += skipSeconds;
    //   showIndicator(`+${skipSeconds}s`);
      showIndicator(`+${skipSeconds}s` , "forward");
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      event.stopPropagation();

      video.currentTime -= skipSeconds;
    //   showIndicator(`-${skipSeconds}s`);
      showIndicator(`-${skipSeconds}s` , "backward");
    }
  },
  true // <-- VERY IMPORTANT: capture phase
);
