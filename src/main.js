

const main = inputseats => {
//console.log(numberOfseats)
const empty = 0
const filled =1

let seatmap =  [{row:'A',seatnum:[0,0,0,0,0]},
            {row:'B',seatnum:[0,0,0,0,0]},
            {row:'C',seatnum:[0,0,0,0,0] }]
result=[]
inputseats.forEach((customer) => {
numofseats = customer

//console.log(enoughSeatspresent(numofseats,seatmap))
if(enoughSeatspresent){

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
}
})

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
