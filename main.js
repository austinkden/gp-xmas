const now = new Date();
const targetDate = new Date(now.getFullYear(), 11, 26, 17, 0, 0); // December 26th at 5 PM

if (now > targetDate) {
  targetDate.setFullYear(targetDate.getFullYear() + 1);
}

const timeDifference = targetDate.getTime() - now.getTime();
const hoursUntilTarget = Math.ceil(timeDifference / (1000 * 60 * 60));

console.log(`Time until December 26th at 5 PM: ${hoursUntilTarget} hours`);


const daysUntilTarget = Math.floor(hoursUntilTarget / 24);
const hours = hoursUntilTarget % 24;

console.log(`Time until December 26th at 5 PM: ${daysUntilTarget} days and ${hours} hours`);

const p = document.getElementById("toUpdate");
p.innerHTML = `See you in ${daysUntilTarget} days and ${hours} hours!`;