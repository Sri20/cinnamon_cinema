const inputValidate = require('./inputValidate.js')
const seatallocator = require('./seatallocator.js')

// This is the main function invoked from Test file 
// Input : Array of seats
// Output : Allocated seat numbers or error message
const main = (inputseats) => {
if (inputseats === undefined ){ throw 'no input' }
if (! inputValidate(inputseats) ) { return 'check input'}
return seatallocator(inputseats) // Allocate seats to the customer
}
module.exports = main;
