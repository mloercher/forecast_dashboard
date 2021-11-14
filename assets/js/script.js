var searchHistory = [];

var apiKey = "128c8c746b69ffc06f48c91a2851d72f";
//function Load History_________________________________________________________________
function loadHistory() {
  var history = localStorage.getItem("searched-city");
  history = JSON.parse(history);
  // for ( i in history ) {

  // }
  for ( i = 0 ; i < history.length ; i++ ) {
    searchHistory.push(history[i]);
  }
}

function saveHistory(city) {
  searchHistory.push(city);
  localStorage.setItem("searched-city", JSON.stringify(searchHistory));
}

function search(cityName) {
  var urlLocation = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
  fetch(urlLocation)
    .then((res) => res.json())
    .then(function (data) {
      //console.log(data.coord);
      var latitude = data.coord.lat;
      var longitude = data.coord.lon;

      //______________________________Weather for today
      var urlWeather = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;

      fetch(urlWeather)
        .then((res) => res.json())
        .then(function (data) {
          console.log(data.current.temp);
          $("#temp-current")
            .empty()
            .append(data.current.temp + " F");
          console.log(data.current.wind_speed);
          $("#wind-current")
            .empty()
            .append(data.current.wind_speed + " MPH");
          console.log(data.current.humidity);
          $("#humidity-current")
            .empty()
            .append(data.current.humidity + "%");
          console.log(data.current.uvi);
          $("#uvi-current").empty().append(data.current.uvi);
          //________If statement to determine color of UVI index box
          if (data.current.uvi < 2) {
            $("#uvi-current").addClass("low");
            $("#uvi-current").removeClass("medium");
            $("#uvi-current").removeClass("high");
          } else if (2 < data.current.uvi && data.current.uvi < 5) {
            $("#uvi-current").removeClass("low");
            $("#uvi-current").addClass("medium");
            $("#uvi-current").removeClass("high");
          } else {
            $("#uvi-current").removeClass("low");
            $("#uvi-current").removeClass("medium");
            $("#uvi-current").addClass("high");
          }
        });
      var urlFiveDay = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&appid=${apiKey}`;
      fetch(urlFiveDay)
        .then((res) => res.json())
        .then(function (data) {
          //______________Day 1
          console.log(data.list[0].dt_txt);
          $("#date-1").empty().append(data.list[0].dt_txt);
          console.log(data.list[0].weather[0].main);
          $("#forecast-1")
            .attr(
              "src",
              `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`
            )
            .attr("alt", data.list[0].weather[0].main);
          console.log(data.list[0].main.temp_max);
          $("#temp-day-1")
            .empty()
            .append("Temp: " + data.list[0].main.temp_max + "F");
          console.log(data.list[0].main.humidity);
          $("#humidity-day-1")
            .empty()
            .append("Humidity: " + data.list[0].main.humidity + "%");
          console.log(data.list[0].wind.speed);
          $("#wind-day-1")
            .empty()
            .append("Wind: " + data.list[0].wind.speed + " MPH");
          //_______________Day 2
          console.log(data.list[8].dt_txt);
          $("#date-2").empty().append(data.list[8].dt_txt);
          console.log(data.list[8].weather[0].main);
          $("#forecast-2")
            .attr(
              "src",
              `http://openweathermap.org/img/wn/${data.list[8].weather[0].icon}@2x.png`
            )
            .attr("alt", data.list[8].weather[0].main);
          console.log(data.list[8].main.temp_max);
          $("#temp-day-2")
            .empty()
            .append("Temp: " + data.list[8].main.temp_max + "F");
          console.log(data.list[8].main.humidity);
          $("#humidity-day-2")
            .empty()
            .append("Humidity: " + data.list[8].main.humidity + "%");
          console.log(data.list[8].wind.speed);
          $("#wind-day-2")
            .empty()
            .append("Wind: " + data.list[8].wind.speed + " MPH");
          //_______________Day 3
          console.log(data.list[16].dt_txt);
          $("#date-3").empty().append(data.list[16].dt_txt);
          console.log(data.list[16].weather[0].main);
          $("#forecast-3")
            .attr(
              "src",
              `http://openweathermap.org/img/wn/${data.list[16].weather[0].icon}@2x.png`
            )
            .attr("alt", data.list[16].weather[0].main);
          console.log(data.list[16].main.temp_max);
          $("#temp-day-3")
            .empty()
            .append("Temp: " + data.list[16].main.temp_max + "F");
          console.log(data.list[16].main.humidity);
          $("#humidity-day-3")
            .empty()
            .append("Humidity: " + data.list[16].main.humidity + "%");
          console.log(data.list[16].wind.speed);
          $("#wind-day-3")
            .empty()
            .append("Wind: " + data.list[16].wind.speed + " MPH");
          //_______________Day 4
          console.log(data.list[24].dt_txt);
          $("#date-4").empty().append(data.list[24].dt_txt);
          console.log(data.list[24].weather[0].main);
          $("#forecast-4")
            .attr(
              "src",
              `http://openweathermap.org/img/wn/${data.list[24].weather[0].icon}@2x.png`
            )
            .attr("alt", data.list[24].weather[0].main);
          console.log(data.list[24].main.temp_max);
          $("#temp-day-4")
            .empty()
            .append("Temp: " + data.list[24].main.temp_max + "F");
          console.log(data.list[24].main.humidity);
          $("#humidity-day-4")
            .empty()
            .append("Humidity: " + data.list[24].main.humidity + "%");
          console.log(data.list[24].wind.speed);
          $("#wind-day-4")
            .empty()
            .append("Wind: " + data.list[24].wind.speed + " MPH");
          //_______________Day 5
          console.log(data.list[32].dt_txt);
          $("#date-5").empty().append(data.list[32].dt_txt);
          console.log(data.list[32].weather[0].main);
          $("#forecast-5")
            .attr(
              "src",
              `http://openweathermap.org/img/wn/${data.list[32].weather[0].icon}@2x.png`
            )
            .attr("alt", data.list[32].weather[0].main);
          console.log(data.list[32].main.temp_max);
          $("#temp-day-5").empty().append("Temp: " + data.list[32].main.temp_max + "F");
          console.log(data.list[32].main.humidity);
          $("#humidity-day-5")
            .empty()
            .append("Humidity: " + data.list[32].main.humidity + "%");
          console.log(data.list[32].wind.speed);
          $("#wind-day-5")
            .empty()
            .append("Wind: " + data.list[32].wind.speed + " MPH");

          //Adding user inputs to search history array
          var searchedCity = $("#citysearch").val();
              saveHistory(searchedCity);
          console.log(searchHistory);  
        });
    });
}

// Event listener ---> User clicks, enters city, search function is called with user input
document.getElementById("searchBtn").addEventListener("click", function () {
  var citySearchEl = document.querySelector("#citysearch").value;
  search(citySearchEl);
});
loadHistory();
// Get date at top of screen
const today = moment().format("LL");
$("#currentDay")
  .empty()
  .append("Today is: " + today);

//event listener
// document.getElementById("button-addon2").addEventListener("click", search);

//_____________________________________________________________________________________________

//query selector, grab "button addon-2"
//add listener event, click to search function
//search
// var url = "https://api.openweathermap.org/data/2.5/onecall?q=New%20York&appid=02b2070ab2a3000118358e8e0fa9f65d";

// var urlLocation = "api.openweathermap.org/data/2.5/weather?q={city name}&appid= 02b2070ab2a3000118358e8e0fa9f65d"

// var cityName = "Los Angeles";

//query selections
// var searchBtn = document.querySelector("button-addon2");
// function testBtn() {
//     console.log('here');
// }
// function selectCity() {
//     var
// }
