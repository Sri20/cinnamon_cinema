// This function checks seat request is a valid one
// positive and not more than 3 seats request
const inputValidate = (inputseats) => {
    console.log(inputseats);
    const inputerr = inputseats.find(
    (seatelement) => seatelement <= 0 || seatelement > 3);
    console.log(inputerr);
    return inputerr == null ? true : false;
};
module.exports = inputValidate;
