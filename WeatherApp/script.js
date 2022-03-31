let weather ={
 APIKey:"5f0a4e024c04a33dc22c1d347004d841",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&appid="+ this.APIKey)
        .then((response)=>
        {if(!response.ok){alert("No weather found");
         throw new Error ("City not found");
    }
       return response.json()
  })
        .then((data)=>this.displayWeather(data))
        
    },
    displayWeather: function(data){
        const {name} = data;
        const{temp, humidity} = data.main;
        const {icon, description} = data.weather[0];
        const {speed} = data.wind;
        const {country} = data.sys;
        document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".location").innerText = name;
      document.querySelector(".degrees").innerText = Math.round(temp) + " ºC";
      document.querySelector(".description").innerText = description;
      document.querySelector(".humidity").innerText = "Humidity: " + humidity +" %";
      document.querySelector(".wind").innerText = "Wind speed: " + Math.round(speed) + " km/h";
      document.querySelector(".country").innerText = ", " + country; 
    },
     search : function(){
      this.fetchWeather(document.querySelector(".searchbar").value)
    }

   
};

//Funcionamento da Searchbar

document.querySelector(".btn").addEventListener("click",()=>{
  weather.search();
})

document.querySelector(".searchbar").addEventListener("keyup",(event)=>{
if(event.key == "Enter"){
  weather.search();
}
})



  

