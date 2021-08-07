const API_KEY = "a24cf0233dca94b166d97d24ac290db6";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log(lat, lng);

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
  fetch(url).then(response => response.json()).then(data => {
    const weather = document.querySelector('#weather span:first-child');
    const city = document.querySelector('#weather span:last-child');

    weather.innerText = data.weather[0].main;
    city.innerText = data.name;
  });
}

function onGeoErr() {
  alert('이 브라우저는 geolocation을 지원하지 않습니다.')
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);