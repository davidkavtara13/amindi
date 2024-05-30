let latitude = 52.52;
let longitude = 43.3569;

let lat = (document.querySelector("#latitude").innerHTML = latitude);
let lon = (document.querySelector("#longtitude").innerHTML = longitude);

let time = document.querySelector("#timeIcon");

let img = document.querySelector("#weatherIcon");

let url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m,is_day,wind_speed_10m`;

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    if (data.current.temperature_2m <= -1) {
      img.src = "snow.png";
    } else if (
      data.current.temperature_2m >= 0 ||
      data.current.temperature_2m <= 10
    ) {
      img.src = "rain.png";
    } else if (
      data.current.temperature_2m >= 11 ||
      data.current.temperature_2m <= 30
    ) {
      img.src = "cloudy.png";
    } else if (data.current.temperature_2m >= 31) {
      img.src = "hot.png";
    }

    if (data.current.is_day === 1) {
      time.src = "sun.png";
    } else {
      time.src = "moon.png";
    }

    let a = data.current.temperature_2m;

    let celsi = (document.querySelector("#celsius").innerHTML = a);
    let fare = (document.querySelector(".celsi").innerHTML = (a * 9) / 5 + 32);
    let wind = (document.querySelector(".km").innerHTML =
      data.current.wind_speed_10m);
  });
