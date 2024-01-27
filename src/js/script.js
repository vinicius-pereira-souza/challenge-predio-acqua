const dataTimes = document.querySelectorAll("span[data-time]");

function getTimeNow(cb) {
  const data = new Date();

  const dataNow = {
    day: data.getDate(),
    hours: data.getHours(),
    minutes: data.getMinutes(),
    seconds: data.getSeconds(),
  };

  cb(dataNow);
}

function insertTimeNow(data) {
  dataTimes[0].textContent = data.day;
  dataTimes[1].textContent = data.hours;
  dataTimes[2].textContent = data.minutes;
  dataTimes[3].textContent = data.seconds;
}

setInterval(() => {
  getTimeNow(insertTimeNow);
}, 1000);
