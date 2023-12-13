function kiloweightConvert(value) { 
    document.getElementById("Pounds").innerHTML = 
      value * 2.2046;
      document.getElementById("Grams").innerHTML = 
      value / 0.0010000;  
    document.getElementById("Ounces").innerHTML = 
      value * 35.274; 
  } 