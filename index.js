/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const velocityKmh = 10000; // velocity (km/h)
const accelerationMs = 3; // acceleration (m/s^2)
const timeS = 3600; // seconds (1 hour)
const distanceKm = 0; // distance (km)
const fuelKg = 5000; // remaining fuel (kg)
const fuelBurnRateKgPer = 0.5; // fuel burn rate (kg/s)

const velocityMs = velocityKmh * (1000/3600); // Convert velocity from km/h to m/s for correct calculations

// Pick up an error with how the function below is called and make it robust to such errors
const calcNewVelocity = (velocity, acceleration, time) => {
}

console.log(`Corrected New Velocity: ${vel2} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);






