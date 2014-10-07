pi-temperature
==============

Measure the temperature on a Raspberry Pi - Node.js module

## Usage
The API is very easy, just do something like this:
```
var temp = require("pi-temperature");
temp.measure(function(temp)
{
	console.log("It's " + temp + " celsius!");
});
```
**Note:** Temperature is in celsius.

## API
### temp.measure(function callback(temperature, err))
Measures the temperature and calls the callback with the parameters temperature and error (if any.)

Temperature is in celsius.
