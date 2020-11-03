// Here we are building the URL we need to query the database

let APIKey = "298ac576969a1ac55b166266aed2262a";
let usersInput ="";
let weatherInput;

function searchWeather(usersInput) {
    
    
        //let usersInput = "";
        APIKey = "298ac576969a1ac55b166266aed2262a";
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + usersInput + "&appid=" + APIKey;
        
    // Here we run our AJAX call to the OpenWeatherMap API
       $.ajax({
        url: queryURL,
        method: "GET"
       })
        // We store all of the retrieved data inside of an object called "response"
        .then(function (response) {

            // Log the queryURL
            console.log(queryURL);

            // Log the resulting object
            console.log(response);

            // Transfer content to HTML
            $(".city").html("<h1>" + response.name + " Weather Details</h1>");
            $(".wind").text("Wind Speed: " + response.wind.speed);
            $(".humidity").text("Humidity: " + response.main.humidity);

            // Convert the temp to fahrenheit
            let tempF = (response.main.temp - 273.15) * 1.80 + 32;

            // add temp content to html
            $(".temp").text("Temperature (K) " + response.main.temp);
            $(".tempF").text("Temperature (F) " + tempF.toFixed(2));

            // Log the data in the console as well
            console.log("Wind Speed: " + response.wind.speed);
            console.log("Humidity: " + response.main.humidity);
            console.log("Temperature (F): " + tempF);

            let iconLink = "http://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png";
            let imgTag = $("<img>")
            imgTag.attr("src", iconLink);
            $(".icon").html(imgTag)
        });
}

       $("button").on("click", (event) => {
       event.preventDefault();
          console.log("click")
            // Preventing the button from trying to submit the form
         
        weatherInput = $(".inputValue").val().trim();

        searchWeather(weatherInput);

        fiveDayWearthe(weatherInput);

        console.log(weatherInput)
       });


      








        function fiveDayWearthe(usersInput) {
    
    
        //let usersInput = "";
        APIKey = "298ac576969a1ac55b166266aed2262a";
        var queryURLFiveDay = "https://api.openweathermap.org/data/2.5/forecast?q=" + usersInput + "&appid=" + APIKey;
        
    // Here we run our AJAX call to the OpenWeatherMap API
       $.ajax({
        url: queryURLFiveDay,
        method: "GET"
       })
        // We store all of the retrieved data inside of an object called "response"
        .then(function (response) {

            // Log the queryURLFiveDay
            console.log(queryURLFiveDay);

            // Log the resulting object
            console.log(response);

            // Transfer content to HTML
            $(".1stDayDay").text("Date: " + response.list[0].dt_txt);
            $(".1stDayhumidity").text("Humidity: " + response.list[0].main.humidity);

            $(".2ndDayDate").text("Date: " + response.list[1].dt_txt);
            $(".2stDayhumidity").text("Humidity: " + response.list[1].main.humidity);

            $(".3rdDayDate").text("Date: " + response.list[2].dt_txt);
            $(".3stDayhumidity").text("Humidity: " + response.list[2].main.humidity);

            $(".4thDayDate").text("Date: " + response.list[3].dt_txt);
            $(".4stDayhumidity").text("Humidity: " + response.list[3].main.humidity);
            
            $(".5thDayDate").text("Date: " + response.list[4].dt_txt);
            $(".5stDayhumidity").text("Humidity: " + response.list[4].main.humidity);

            // Convert the temp to fahrenheit
            let tempF = (response.list[0].main.temp - 273.15) * 1.80 + 32;

            // add temp content to html
            //$("").text("Temperature (K) " + response.main.temp);
            $(".1stDaytempF").text("Temperature (F) " + tempF.toFixed(2));

            $(".2stDaytempF").text("Temperature (F) " + tempF.toFixed(2));

            $(".3stDaytempF").text("Temperature (F) " + tempF.toFixed(2));

            $(".4stDaytempF").text("Temperature (F) " + tempF.toFixed(2));

            $(".5thDaytemp").text("Temperature (F) " + tempF.toFixed(2));

            // Log the data in the console as well
            console.log("Date: " + response.list[0].dt_txt);
            console.log("Humidity: " + response.list[0].main.humidity);
            console.log("Temperature (F): " + tempF);

            let iconLink = "http://openweathermap.org/img/wn/" + response.list[0].weather[0].icon + "@2x.png";
            let imgTag = $("<img>")
            imgTag.attr("src", iconLink);
            $(".1stDayicon").html(imgTag)

            // let iconLink = "http://openweathermap.org/img/wn/" + response.list[1].weather[0].icon + "@2x.png";
            // let imgTag = $("<img>")
            // imgTag.attr("src", iconLink);
            // $(".1stDayicon").html(imgTag)

            // let iconLink = "http://openweathermap.org/img/wn/" + response.list[2].weather[0].icon + "@2x.png";
            // let imgTag = $("<img>")
            // imgTag.attr("src", iconLink);
            // $(".1stDayicon").html(imgTag)

            // let iconLink = "http://openweathermap.org/img/wn/" + response.list[3].weather[0].icon + "@2x.png";
            // let imgTag = $("<img>")
            // imgTag.attr("src", iconLink);
            // $(".1stDayicon").html(imgTag)

            // let iconLink = "http://openweathermap.org/img/wn/" + response.list[4].weather[0].icon + "@2x.png";
            // let imgTag = $("<img>")
            // imgTag.attr("src", iconLink);
            // $(".1stDayicon").html(imgTag)















        });
}





    //    let fiveDayqueryURL = "api.openweathermap.org/data/2.5/forecast?q=" + usersInput + "&appid=" + APIKey;
      // newfun  get forcast  