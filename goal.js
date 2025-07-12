

function openModal(videoSrc) {
  const modal = document.getElementById("videoModal");
  const player = document.getElementById("videoPlayer");
  player.src = videoSrc;
  modal.style.display = "flex";
}

function closeModal() {
  const modal = document.getElementById("videoModal");
  const player = document.getElementById("videoPlayer");
  player.pause();
  player.currentTime = 0;
  player.src = "";   
  modal.style.display = "none";
}

