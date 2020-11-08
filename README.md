# weather_app_tech_monterrey_hw
 
 https://sanjothebay.github.io/weather_app_tech_monterrey_hw/

https://github.com/sanjothebay/weather_app_tech_monterrey_hw


# 06 Server-Side APIs: Weather Dashboard

Use the [OpenWeather API](https://openweathermap.org/api) to retrieve weather data for cities. The documentation includes a section called "How to start" that will provide basic setup and usage instructions. Use `localStorage` to store any persistent data.

## User Story

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Acceptance Criteria

```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
WHEN I open the weather dashboard
THEN I am presented with the last searched city forecast
```

The following image demonstrates the application functionality:

![image](https://user-images.githubusercontent.com/67298961/98206417-78604180-1eff-11eb-9208-9184d08a2faf.png)

**** I pulled the work from the Tech Monterrey Gitlab and I then created my own repository for the project *****

**** App Has Working Gif ****

![image](https://user-images.githubusercontent.com/67298961/98205677-2834af80-1efe-11eb-9a78-9a1dc51c6b97.png)

![image](https://user-images.githubusercontent.com/67298961/98206261-39ca8700-1eff-11eb-9f35-dbe042ffc237.png)

I started by going to the weather API and getting the API that had the current weather as well as the 5-day forecast. 
I then built a placeholder for where everything would be placed. For visual aspects. 

![image](https://user-images.githubusercontent.com/67298961/98206324-54046500-1eff-11eb-915c-fff271b9d9b5.png)

I then search for how to convert the temperature to Fahrenheit.
let tempF = (response.main.temp - 273.15) * 1.80 + 32;
With my click function, I was able to consol.log the weather API and see that I need the icon, wind, temp, and humidity. 
When I was able to append the first information from the object I had no issue with the rest. 
I had fun looking up through the object and see what I can add. 

![image](https://user-images.githubusercontent.com/67298961/98206087-eeb07400-1efe-11eb-9396-a834002fed8c.png)
I was able to add the localStorage and append it as well, But I still having issues understanding how to ave the text stay after a refresh.
I was able to get the user input to append to the bottom of the serach.this would he use for history in case the user wants to see what he has searched for 

![image](https://user-images.githubusercontent.com/67298961/98206157-10116000-1eff-11eb-9e48-d99f7996f0e4.png)

Over all this was a great Homework that i enjoyed doing i learned alot form the api calls. 

