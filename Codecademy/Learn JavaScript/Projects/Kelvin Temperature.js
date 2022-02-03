//Kelvin weather 2201281512
const kelvin = 294;
//this is the input temp value for kelvin
let celsius = kelvin - 273;
//celsius is kelvin with a -273 offset
let fahrenheit = celsius * (9/5) + 32;
//F = C*(9/5)+32
let newton = celsius * (33/100);
fahrenheit = Math.floor(fahrenheit);
celsius = Math.floor(celsius);
newton = Math.floor(newton);
//eliminate decimals from calulations
console.log(`The temperature is ${celsius} degrees Celsius.`);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${newton} degrees Newton.`);
//bih
