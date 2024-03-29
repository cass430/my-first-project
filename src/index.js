function displayTemp(Response) {
  console.log(Response.data);

  //select the temperature element then display the temperature element //
  let numaricalTempElement = document.querySelector("#numarical-temp-value");
  let temperature = Math.round(Response.data.temperature.current);
  numaricalTempElement.innerHTML = `${temperature}°C`;
  let cityElement = document.querySelector("#curentCityHeading");
  cityElement.innerHTML = `${Response.data.city}, ${Response.data.country}`;

  //feels-like element practice //
  let feelsLikeElement = document.querySelector("#feels-like");
  let feelsLikeNumber = Math.round(Response.data.temperature.feels_like);
  feelsLikeElement.innerHTML = `Feels like: <strong>${feelsLikeNumber}°C </strong>`;
  //

  let humidityElement = document.querySelector("#current-humidity");
  let humidityNumber = Response.data.temperature.humidity;
  humidityElement.innerHTML = `Humidity: <strong>${humidityNumber}%</strong>`;

  let conditionElement = document.querySelector("#current-condition");
  conditionElement.innerHTML = `<strong>${Response.data.condition.description}</strong>`;

  let windSpeedElement = document.querySelector("#current-wind");
  windSpeedElement.innerHTML = `Wind: <strong>${Response.data.wind.speed}km/h</strong>`;

  getForecast(Response.data.city);
}
function searchCity(city) {
  let apiKey = "f7f785eadbt3ff93c746f724aob356d0";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemp);
}

function handleSubmit(event) {
  event.preventDefault();

  let searchInputElement = document.querySelector("#search-input");

  let searchInput = document.querySelector("#search-input");
  searchCity(searchInput.value);
}
let searchForm = document.querySelector("#search-form");

searchForm.addEventListener("submit", handleSubmit);

let curentDate = document.querySelector("#curent-date-heading");

let curentTime = new Date();
let minutes = curentTime.getMinutes();
let hours = curentTime.getHours();
let day = curentTime.getDay();

let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

let formattedDay = days[day];

if (minutes < 10) {
  minutes = `0${minutes}`;
}

if (hours < 10) {
  hours = `0${hours}`;
}

curentDate.innerHTML = ` ${formattedDay} ${hours}:${minutes}`;

function getForecast(city) {
  let apiKey = `f7f785eadbt3ff93c746f724aob356d0`;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios(apiUrl).then(displayForecast);
}

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  return days[date.getDay()];
}

function displayForecast(Response) {
  console.log(Response.data);

  let forecastHtml = "<div class='row'>";
  let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  Response.data.daily.forEach(function (day, index) {
    if (index < 6) {
      forecastHtml += `<div class="col ${day}"> 
      <div class="forecast-icon">
   <img src="${day.condition.icon_url}"/> 
   </div> 
   <div class="week-day"> ${formatDay(day.time)}</div> 
    <div class="temp-high"> ${Math.round(day.temperature.maximum)}</div> 
    <div class="temp-low"> ${Math.round(day.temperature.minimum)}</div>
  </div>`;
    }
  });

  forecastHtml = forecastHtml + "</div>";
  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHtml;
}

searchCity("Paris");
