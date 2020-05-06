const countdown = document.getElementById('countdown');
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

function updateTime() {
	const currentTime = new Date();
	const difference = newYearTime - currentTime;
	const day = Math.floor(difference / 1000 / 60 / 60 / 24);
	const hour = Math.floor(difference / 1000 / 60 / 60) % 24;
	const minute = Math.floor(difference / 1000 / 60) % 60;
	const second = Math.floor(difference / 1000) % 60;

	days.innerHTML = day;
	hours.innerHTML = hour;
	minutes.innerHTML = minute;
	seconds.innerHTML = second;
}

setInterval(updateTime,1000);