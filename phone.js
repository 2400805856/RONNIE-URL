function updateTime() {
  const timeEl =
  document.getElementById("time");
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  timeEl.textContent = `${hours}:${minutes}`;

}

setInterval(updateTime, 1000);
updateTime();