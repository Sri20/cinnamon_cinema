

const main = inputseats => {
//console.log(numberOfseats)
const empty = 0
const filled =1

let seatmap =  [{row:'A',seatnum:[0,0,0,0,0]},
            {row:'B',seatnum:[0,0,0,0,0]},
            {row:'C',seatnum:[0,0,0,0,0] }]
result=[]
noerr = 0 
//inputseats.forEach((customer) => {

//numofseats = customer

//console.log(enoughSeatspresent(numofseats,seatmap))
for (let i=0;i< inputseats.length && (noerr==0) ;i++){
numofseats = inputseats[i]
console.log(numofseats)
if (enoughSeatspresent(numofseats,seatmap))
{
    console.log(seatmap)
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

result.push(resultOnecustomer.toString())
}
}
else{
    result.push('Seats unavailable') 
    noerr = 1
}
}

//})

return result
}


const enoughSeatspresent = (numofseatsP,seatmapP) => {
    seatsfree = 0;
    seatmapP.forEach((rowP) => {
    
        seatsfree += rowP.seatnum.filter((free) => free==0).length
    })

    
    console.log(seatsfree)
    if (seatsfree >= numofseats) 
    {
        return true
    }
    else{
        return false
    // set error indicator
    }

}
module.exports = main
