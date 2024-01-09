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
  feelsLikeElement.innerHTML = `Feels like: ${feelsLikeNumber}°C`;
  //
}
function handleSubmit(event) {
  event.preventDefault();

  let searchInputElement = document.querySelector("#search-input");

  let city = searchInputElement.value;
  let apiKey = "f7f785eadbt3ff93c746f724aob356d0";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemp);
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

curentDate.innerHTML = `<strong> ${formattedDay}</strong> ${hours}:${minutes}`;
