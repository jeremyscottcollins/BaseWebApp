function getWeather(searchQuery){
  var url = "https://api.openweathermap.org/data/2.5/weather?zip="+searchQuery+",us&units=imperial&&APPID="+apiKey;

  $(".city").text("");
  $(".temp").text("");
  $(".wind").text("");
  $(".error-message").text("");

  $.ajax(url,{success: function(data){
    var windDirection = data.wind.deg;
    $(".city").text(data.name);
    $(".temp").text("The current temperature is " + data.main.temp + " degrees.");
    $(".wind").text("Wind speed: " + data.wind.speed + "mph " + (degToDirection(windDirection)));
  }, error: function(error){
    $(".error-message").text("An error occurred.");
  }})
}

function searchWeather(){
  var searchQuery = $(".search").val();
  getWeather(searchQuery);
}

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