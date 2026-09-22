const NGN_PER_USD = 1500;

function nairaToUsd(amount) {
  return amount / NGN_PER_USD;
}

function usdToNaira(amount) {
  return amount * NGN_PER_USD;
}

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function kgToPounds(kg) {
  return kg * 2.20462;
}


const nairaAmount = 5000;
const usdFromNaira = nairaToUsd(nairaAmount);
console.log(`₦${nairaAmount} = $${usdFromNaira.toFixed(2)}`);
console.log(typeof usdFromNaira.toFixed(2)); // "string" — toFixed() returns text, not a number

const usdAmount = 100;
const nairaFromUsd = usdToNaira(usdAmount);
console.log(`$${usdAmount} = ₦${nairaFromUsd.toFixed(2)}`);

const celsiusFreezing = 0;
const celsiusBoiling = 100;
console.log(`${celsiusFreezing}°C = ${celsiusToFahrenheit(celsiusFreezing)}°F`);
console.log(`${celsiusBoiling}°C = ${celsiusToFahrenheit(celsiusBoiling)}°F`);

const kgAmount = 70;
console.log(`${kgAmount}kg = ${kgToPounds(kgAmount)} lbs`);


console.log(`celsiusToFahrenheit(0) is 32: ${celsiusToFahrenheit(0) === 32}`);
console.log(`celsiusToFahrenheit(100) is 212: ${celsiusToFahrenheit(100) === 212}`);

const roundTrip = usdToNaira(nairaToUsd(5000));
console.log(`usdToNaira(nairaToUsd(5000)) = ${roundTrip}`);
console.log(`Exactly 5000? ${roundTrip === 5000}`);
console.log(`For comparison, 0.1 + 0.2 = ${0.1 + 0.2}`);