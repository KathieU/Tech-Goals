document.addEventListener("DOMContentLoaded", function () {
  const currentTimeUTC = document.querySelector(
    '[data-testid="currentTimeUTC"]'
  );
  const currentDay = document.querySelector('[data-testid="currentDay"]');

  function updateTime() {
    const now = new Date();
    currentTimeUTC.textContent = now.toUTCString();
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    currentDay.textContent = days[now.getUTCDay()];
  }

  updateTime();
  setInterval(updateTime, 1000);
});
