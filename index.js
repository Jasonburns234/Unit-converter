// Get the DOM elements
const numbertoConvert = document.getElementById("unit-input");
const metersToFeetConvert = document.getElementById("meter-to-feet-convert");
const litresToGallonsConvert = document.getElementById("liters-to-gallons-convert");
const kilogramsToPoundsConvert = document.getElementById("Kilograms-to-Pounds-convert");

// Add an event listener to a button or any other trigger element to call the convertUnits function
function convertUnits() {
  // Parse the value as a number and check if it's a valid number
  const value = parseFloat(numbertoConvert.value);
  
  if (isNaN(value)) {
    metersToFeetConvert.textContent = `Please enter a numeric value to convert...`;
    litresToGallonsConvert.textContent = `Please enter a numeric value to convert...`;
    kilogramsToPoundsConvert.textContent = `Please enter a numeric value to convert...`;
  } else {
    const feet = value * 3.2808399;
    const gallon = value / 4.546092;
    const pound = value * 2.20462262;
    
    // Update the text content of the elements with the converted values
    metersToFeetConvert.textContent = `${value} Meters is equal to ${feet.toFixed(3)} Feet`;
    litresToGallonsConvert.textContent = `${value} Litres is equal to ${gallon.toFixed(3)} Gallon`;
    kilogramsToPoundsConvert.textContent = `${value} kilograms is equal to ${pound.toFixed(3)} pounds`;
  };
  
  // Clear the input value
  numbertoConvert.value = "";
};

