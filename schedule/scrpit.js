document.addEventListener("DOMContentLoaded", function () {
    const events = document.querySelectorAll(".schedule-event");
    events.forEach(event => {
      event.setAttribute("data-aos", "fade-up");
    });
  
    const th = document.getElementsByTagName("th");
    for (let i = 0; i < th.length; i++) {
      th[i].setAttribute("data-aos", "fade-right");
      th[i].setAttribute("data-aos-delay", "100");
    }
  
    const td = document.getElementsByTagName("td");
    for (let i = 0; i < td.length; i++) {
      td[i].setAttribute("data-aos", "fade-in");
    }
  });
  