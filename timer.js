const timeInput = document.getElementById('time');
const dateInput = document.getElementById('date');
const ampmSelect = document.getElementById('ampm');
const ringtoneSelect = document.getElementById('ringtone');
const setAlarmButton = document.getElementById('set-alarm');

let alarmSound;

setAlarmButton.addEventListener('click', () => {
  const alarmTime = new Date(${dateInput.value} ${timeInput.value} ${ampmSelect.value});
  const ringtone = ringtoneSelect.value;

  if (isNaN(alarmTime.getTime())) {
    alert('Please set a valid time and date.');
    return;
  }

  if (alarmSound) {
    alarmSound.pause();
  }

  alarmSound = new Audio(sounds/${ringtone}.mp3);

  const intervalId = setInterval(() => {
    const currentTime = new Date();
    if (currentTime.getTime() >= alarmTime.getTime()) {
      alarmSound.play();
      alert('Wake up!');
      clearInterval(intervalId);
    }
  }, 1000);

  console.log(Alarm set for ${alarmTime.toLocaleString()});
});