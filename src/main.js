const inputValidate = require('./inputValidate.js')
const seatallocator = require('./seatallocator.js')

const main = (inputseats) => {

inputValidate(inputseats) 
return seatallocator(inputseats)
}

module.exports = main;
