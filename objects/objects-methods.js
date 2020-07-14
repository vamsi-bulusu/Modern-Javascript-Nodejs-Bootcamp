// with Objects and methods we can create self contained unit 

let restaurant = {
    name : 'ABS',
    capacity : 100,
    guestCount : 0,
    checkAvailability : function(partySize){
        let seatsLeft = this.capacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty : function(partySize){
        if(this.checkAvailability(partySize)) this.guestCount += partySize
        else console.log('No seats are available')
    },
    removeParty : function(partySize){
        if(this.guestCount >= partySize) this.guestCount -= partySize
        else console.log('Invalid Guest Count')
    }
}

restaurant.seatParty(95)
console.log(`Availability : ${restaurant.checkAvailability(6)}`)


