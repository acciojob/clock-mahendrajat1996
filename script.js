//your JS code here. If required.
function updateTime() {
        const timerElement = document.getElementById("timer");
        const currentDate = new Date();
        const timeString = currentDate.toLocaleTimeString();
        const dateString = currentDate.toLocaleDateString();
        const dateTimeString = `${timeString} - ${dateString}`;
        timerElement.textContent = dateTimeString;
      }

      // Update the time every second
      setInterval(updateTime, 1000);