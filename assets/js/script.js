var apiKey = "0b5df93a7e1a777a23c1f41539516ab1"
$("#citySearch").click(function () {
    console.log('clicked')
    var cityName = $("#cityName").val()

    var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=" + apiKey
    $.get(queryUrl).then(function (results) {
        console.log(results)

        var main = $("#main")
        var newDiv = $("<div>").addClass("card p-3 mt-3")
        var title = $("<h3>").text(results.name + " ("+moment().format('l')+")")
        var img = $("<img>").attr("src", "http://openweathermap.org/img/wn/"+results.weather[0].icon+"@2x.png")
        title.append(img)
        var temp = $("<div>").text("Temperature: "+ results.main.temp+ " °F");
        var humidity = $("<div>").text("Humidity: "+ results.main.humidity+ " %");
        var wind = $("<div>").text("Wind Speed: "+ results.wind.speed+ " MPH");
        newDiv.append(title, temp, humidity, wind)
        main.append(newDiv)




    })

});


