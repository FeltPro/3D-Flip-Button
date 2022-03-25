fetch('https://api.openweathermap.org/data/2.5/weather?q=plymouth&appid=422b3a665c483277474bce587c2bf337')
  .then(response => response.json())
  .then(data => 
   document.getElementById("root").innerHTML = data.main.temp
  
  );
  