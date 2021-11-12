var apiKey = "128c8c746b69ffc06f48c91a2851d72f";
var url =
  "https://api.openweathermap.org/data/2.5/onecall?q=New%20York&appid=128c8c746b69ffc06f48c91a2851d72f";

// var urlLocation = "api.openweathermap.org/data/2.5/weather?q={city name}&appid= 128c8c746b69ffc06f48c91a2851d72f"

// var cityName = "Los Angeles";

//query selections
var searchBtn = document.querySelector("button-addon2");

function testBtn() {
    console.log('here');
}

function search(cityName) {
    
  var urlLocation = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
  fetch(urlLocation)
    .then((res) => res.json())
    .then(function (data) {
      console.log(data.coord);
      var latitude = data.coord.lat;
      var longitude = data.coord.lon;
      var urlWeather = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

      fetch(urlWeather)
        .then((res) => res.json())
        .then(function (data) {
          console.log(data);
        });
    });
}


// get the input first
search("New York")

// Get date at top of screen
const today = moment().format("LL");
$("#currentDay").append("Today is: " + today);

//event listener
document.getElementById("button-addon2").addEventListener("click", testBtn);