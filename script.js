let APIKey = "298ac576969a1ac55b166266aed2262a";
let usersInput ="";
let weatherInput;

function searchWeather(usersInput) {
    
    
        //let usersInput = "";
        
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

        console.log(weatherInput);        
        
        
        
        localStorage.setItem(usersInput,weatherInput);
        
        let localStorageusersInput = localStorage.getItem(usersInput);
        
        
        var listCreationFrominput = $("<h4>").text(localStorageusersInput);
        var userInputinValue = $('#submit').val();
        $(".createdListInput").append(listCreationFrominput);
        
    });
    // listCreationFrominput.append(".createdListInput").val();
    
   // console.log(listCreationFrominput);






        function fiveDayWearthe(usersInput) {
    
        //let usersInput = "";
        
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
            $(".1stDayDay").text("Date: " + response.list[3].dt_txt);
            $(".1stDayhumidity").text("Humidity: " + response.list[3].main.humidity + "%");

            $(".2ndDayDate").text("Date: " + response.list[11].dt_txt);
            $(".2ndDayhumidity").text("Humidity: " + response.list[11].main.humidity + "%");

            $(".3rdDayDate").text("Date: " + response.list[19].dt_txt);
            $(".3rdDayhumidity").text("Humidity: " + response.list[19].main.humidity + "%");

            $(".4thDayDate").text("Date: " + response.list[27].dt_txt);
            $(".4thDayhumidity").text("Humidity: " + response.list[27].main.humidity + "%");
            
            $(".5thDayDate").text("Date: " + response.list[35].dt_txt);
            $(".5thDayhumidity").text("Humidity: " + response.list[35].main.humidity + "%");

            // Convert the temp to fahrenheit
            let dayOnetempF = (response.list[3].main.temp - 273.15) * 1.80 + 32;

            let dayTwotempF = (response.list[11].main.temp - 273.15) * 1.80 + 32;

            let dayThreetempF = (response.list[19].main.temp - 273.15) * 1.80 + 32;

            let dayFourtempF = (response.list[27].main.temp - 273.15) * 1.80 + 32;

            let dayFivetempF = (response.list[35].main.temp - 273.15) * 1.80 + 32;

            // add temp content to html
            //$("").text("Temperature (K) " + response.main.temp);
            $(".1stDaytempF").text("Temperature (F) " + dayOnetempF.toFixed(2));

            $(".2ndDaytempF").text("Temperature (F) " + dayTwotempF.toFixed(2));

            $(".3rdDaytempF").text("Temperature (F) " + dayThreetempF.toFixed(2));

            $(".4thDaytempF").text("Temperature (F) " + dayFourtempF.toFixed(2));

            $(".5thDaytempF").text("Temperature (F) " + dayFivetempF.toFixed(2));

            // Log the data in the console as well
            console.log("Date: " + response.list[0].dt_txt);
            console.log("Humidity: " + response.list[0].main.humidity);
           // console.log("Temperature (F): " + tempF);

            let iconLink = "http://openweathermap.org/img/wn/" + response.list[3].weather[0].icon + "@2x.png";
            let imgTag = $("<img>")
            imgTag.attr("src", iconLink);
            $(".1stDayicon").html(imgTag)

            let dayoneiconLink = "http://openweathermap.org/img/wn/" + response.list[11].weather[0].icon + "@2x.png";
            let daytwoimgTag = $("<img>")
            daytwoimgTag.attr("src", dayoneiconLink);
            $(".2ndDayicon").html(daytwoimgTag)

            let daytwoiconLink = "http://openweathermap.org/img/wn/" + response.list[19].weather[0].icon + "@2x.png";
            let daythreeimgTag = $("<img>")
            daythreeimgTag.attr("src", daytwoiconLink);
            $(".3rdDayicon").html(daythreeimgTag)

            let daythreeiconLink = "http://openweathermap.org/img/wn/" + response.list[27].weather[0].icon + "@2x.png";
            let dayfourimgTag = $("<img>")
            dayfourimgTag.attr("src", daythreeiconLink);
            $(".4thDayicon").html(dayfourimgTag)

            let dayfouriconLink = "http://openweathermap.org/img/wn/" + response.list[35].weather[0].icon + "@2x.png";
            let dayfiveimgTag = $("<img>")
            dayfiveimgTag.attr("src", dayfouriconLink);
            $(".5thDayicon").html(dayfiveimgTag)



        });
}





    //    let fiveDayqueryURL = "api.openweathermap.org/data/2.5/forecast?q=" + usersInput + "&appid=" + APIKey;
      // newfun  get forcast  