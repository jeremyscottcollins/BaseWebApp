function getWeather(searchQuery){
  var url = "https://api.openweathermap.org/data/2.5/weather?zip="+searchQuery+",us&units=imperial&&APPID="+apiKey;

  $(".city").text("");
  $(".temp").text("");
  $(".wind").text("");
  $(".error-message").text("");

  $.ajax(url,{success: function(data){
    var windDirection = data.wind.deg;
    $(".city").text(" " + data.name);
    $(".temp").text(data.main.temp.toFixed(0));
    $(".wind").text(data.wind.speed.toFixed(0) + " mph " + (degToDirection(windDirection)));
    $(".condition").text(data.weather[0].main);
  }, error: function(error){
    $(".error-message").text("An error occurred. Enter a 5 digit zip code.");
  }})
}

function searchWeather(){
  var searchQuery = $(".search").val();
  getWeather(searchQuery);
}

// Convert wind degrees (num 1-360) to readable directions
function degToDirection(deg){
  if (deg>337.5) return 'North';
  if (deg>292.5) return 'North West';
  if(deg>247.5) return 'West';
  if(deg>202.5) return 'South West';
  if(deg>157.5) return 'South';
  if(deg>122.5) return 'South East';
  if(deg>67.5) return 'East';
  if(deg>22.5){return 'North East';}
  return 'North';
}

// Convert cloudiness percentage to readable text
function cloudiness(per){
  if (per>75) return 'Cloudy';
  if (per>10) return 'Partly Cloudy';
  return 'Clear';
}