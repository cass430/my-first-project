<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Weather App</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
      crossorigin="anonymous"
    />

  
    <link href="src/styles.css" rel="stylesheet" type="text/css" />
 

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Pacifico&family=Poppins:wght@200;400&display=swap" rel="stylesheet">

<script src="https://kit.fontawesome.com/d6373aaf16.js" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js"></script>
</head>
  <body>
    
<div class="container">
    <div class="weatherApp">
        <div class="page-opening">
    
     <form id="search-form">
<div class="row">
  <div class="col-3">
    </div>
    <div class="col-5">
        <input type="search" placeholder="Enter a city.." autofocus="on" autocomplete="off" class="search-bar" id="search-input" >
      </div>
      <div class="col-1">
        <button class="search-button">Search</button>
        </div>

<div class="col-3">
</div>
      </div>
    </div>
      </div>
  <h2 id="curentCityHeading"> Your weather...</h2>

  
<div class="current-weather-info">
<div class="row">
    <div class="col-3">
    

    <h3 id="numarical-temp-value"> 0°C </h3>
       <h4 id="curent-date-heading">  </h4>
     
      <p>
        <div id="feels-like"> 
        Feels like: 
        </div>

        
   <span id="current-high"> <i class="fa-solid fa-arrow-up"></i> 28° </span>

   <span id="current-low"> <i class="fa-solid fa-arrow-down"></i>10° </span>
        </p>
      
</div>

    
          
    
      <div class="weekly-forecast">
        <div class="row">

  <div class="col monday">
   ☀️<br> 
   <div class="week-day"> MON </div> 
    <div class="temp-high"> 21</div> 
    <div class="temp-low"> 11</div>
  </div>
   <div class="col tuesday">
   ☀️ <br> 
    <div class="week-day"> TUE </div> 
    <div class="temp-high"> 22 </div>
     <div class="temp-low"> 12 </div>
  </div>
   <div class="col wednesday">
    ☀️ <br> 
    <div class="week-day" >WED </div> 
     <div class="temp-high"> 23 </div>
     <div class="temp-low"> 13</div> 
  </div>
   <div class="col thursday">
    ☀️ <br> 
     <div class="week-day">THU </div>
     <div class="temp-high"> 24</div>
    <div class="temp-low"> 14</div>
   </div>
   <div class="col friday">
   ☀️ <br> 
    <div class="week-day"> FRI </div> 
    <div class="temp-high"> 25</div>
    <div class="temp-low"> 15</div>
   </div>
   <div class="col saturday">
   ☀️ <br> 
    <div class="week-day"> SAT </div> 
    <div class="temp-high"> 26</div> 
    <div class="temp-low"> 16</div>
   </div>
      </div>
      </div>
      </div>
    </div>

    <footer>
This project was coded by <a href=""> Casper </a> and is on <a href="">Ghithub. </a>
    </footer>



</div>
</div>


      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossorigin="anonymous"
>


</script>

<script src="src/index.js"></script>
    </div>
    </div>
  </body>
</html>