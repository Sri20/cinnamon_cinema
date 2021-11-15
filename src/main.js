

const main = inputseats => {
//console.log(numberOfseats)
const empty = 0
const filled =1

let seatmap =  [{row:'A',seatnum:[0,0,0,0,0]},
               {row:'B',seatnum:[0,0,0,0,0]}]
   //             {row:'C',seatnum:[0,0,0,0,0] }]
result=[]
inputseats.forEach((customer) => {
numofseats = customer
//if (enoughSeatspresent(numofseats)){
    resultOnecustomer = []
while (numofseats>0){
    seatmap.forEach((eachrow) => {
        eachrow.seatnum.forEach((seat,index) => {
            if (seat == 0 && numofseats>0){
                eachrow.seatnum[index]=filled
                resultOnecustomer.push(eachrow.row + (index+1))
                numofseats--
            }   
        })
    })
}
result.push(resultOnecustomer.toString())
})

/*

if (customerseat==1)    {

    result.push(seatmap.row+seatmap.seatnum[0])
   
    seatmap.seatno[0] =filled

    console.log(seatmap)
}  
else {
    result.push( seatmap.row+Object.keys(seatmap.seatno[0])+' '+
    seatmap.row+Object.keys(seatmap.seatno[1]))
}  
})*/
//console.log(seatmap)
return result
}
/*

enoughSeatspresent((numofseats) => {
    seatsfree = 0;
    seatmap.forEach((row) =>{
        seatsfree += row.filter((seatnum) => seatnum==0)
    })
    if (seatsfree ==numofseats)
    {
        return true
    }
    else{
        return false
    // set error indicator
    }

})*/
module.exports = main
