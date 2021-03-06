const seatallocator = (inputseats) => {

    const empty = 0;
    const filled = 1;
   
    //Initialise seatmap
    let seatmap = [
        { row: "A", seatnum: [0, 0, 0, 0, 0] },
        { row: "B", seatnum: [0, 0, 0, 0, 0] },
        { row: "C", seatnum: [0, 0, 0, 0, 0] },
    ];
    let result = [];
    let noerr = 0;
    for (let i = 0; i < inputseats.length && noerr == 0; i++) { // seat request per customer
        numofseats = inputseats[i];
        if (enoughSeatspresent(numofseats, seatmap)) {
            resultOnecustomer = [];
            while (numofseats > 0) { 
                seatmap.forEach((eachrow) => { eachrow.seatnum.forEach((seat, index) => {
                if (seat == 0 && numofseats > 0) {     // allocate seat
                    eachrow.seatnum[index] = filled;
                    resultOnecustomer.push(eachrow.row + (index + 1));
                    numofseats--;
                }
            });
            });
            result.push(resultOnecustomer.toString()); 
        }
        } else {
        result.push("Seats unavailable");
        noerr = 1;
        }
    }
    return result;
}

// This functions checks the seatmap whether it has free seats available for allocation 
const enoughSeatspresent = (numofseatsP, seatmapP) => {
    seatsfree = 0;
    seatmapP.forEach((rowP) => {
        seatsfree += rowP.seatnum.filter((seatP) => seatP == 0).length;
    })
    return (seatsfree >= numofseatsP) ?   true :  false;
    }

module.exports = seatallocator;