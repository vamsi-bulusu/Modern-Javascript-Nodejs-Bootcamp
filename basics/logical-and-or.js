let isGuestOneVegan = true
let isGuestTwoVegan = false

if(isGuestOneVegan && isGuestTwoVegan){
    console.log('offer only vegan dishes')
}
else if(isGuestOneVegan || isGuestTwoVegan){
    console.log('offer some vegan dishes')
}
else{
    console.log('offer any dishes')
}