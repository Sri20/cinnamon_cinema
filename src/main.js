const main = numberOfseats => {
console.log(numberOfseats)
//seatmap = { rowA : [A1,A2,A3,A4,A5] }
let seatmap = {row:'A',seatno: ['1','2']}
if (numberOfseats==1)    {
    return seatmap.row+seatmap.seatno[0]
}  
else {
    return seatmap.row+seatmap.seatno[0]+' '+seatmap.row+seatmap.seatno[1]
}  
}
module.exports = main
