const progress = document.getElementById("progress");
const timer = document.getElementById("timer");
button = document.getElementById("play");

function progressLoop() {
  setInterval(function () {
    progress.value =
      Math.round((video.currentTime / video.duration) * 100);
    timer.innerHTML =
      Math.round(video.currentTime);
  });
}
const pauseIcons = document.getElementById("pause-icon");
const playIcons = document.getElementById("play-icon");

function playPause() {
  if (video.paused) {
    video.play();
    pauseIcons.classList.remove("pause-btn")
    playIcons.classList.add("play-btn")
  } else {
    video.pause();
    pauseIcons.classList.add("pause-btn")
    playIcons.classList.remove("play-btn")
  }
}

button.addEventListener("click", playPause);
video.addEventListener("play", progressLoop);

/*----------------
-- massaging --
----------------*/

const input = document.getElementById('massage-input');
const btn = document.getElementById('btn');
btn.addEventListener('click', function (e) {
  let chatBox = document.getElementById('massage-box');
  let inpVal = input.value;
  let html = `<div class="chat-member">
  <div class="chat-member-profile-image"><img
          src="resources/image/profile-picture-2.jpg" alt=""></div>
  <div class="member-message">
      <h2 class="heading-secondary profile-name chat-member-active">Wijaya abadi
      </h2>
      <p id="massage" class="primary-paragraph word-wrape">${inpVal}</p>
  </div>
  </div>`;
  if (inpVal == 0) {
    alert('massage cant be empty');
  } else {
    chatBox.innerHTML += html;
    chatBox.scrollBy(0, 100);
  }
  input.value = '';
})