window.addEventListener("load", calculateTime);
function calculateTime() {
  let date = new Date();
  let dayNumber = date.getDay();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let ampm = hour >= 12 ? "PM" : "AM";
  const dayNames = ["SUM", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  hour = hour % 12;
  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  document.getElementById("day").innerHTML = dayNames[dayNumber];
  document.getElementById("hour").innerHTML = hour;
  document.getElementById("minute").innerHTML = minute;
  document.getElementById("ampm").innerHTML = ampm;
  document.getElementById("second").innerHTML = second;

  setTimeout(calculateTime, 2);
}
