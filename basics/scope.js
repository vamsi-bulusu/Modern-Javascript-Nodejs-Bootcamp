//Global Scope
//Local Scope


let item = 'item'


if(item.length > 0) {
    let itemOne = 'itemOne'
    console.log(itemOne)
}

//console.log(itemOne)


// Variable shadowing example
// Leaked Global variables -> if the program doesn't contain a variable in its local scope
// and as well in its global scope it creates a new global variable with the assigned variable

// Global scope(name)
  // Local scope(name)
    // Local Scope 
  //  Local Scope


  //let name = 'vamsi'

  if(true){
    //  let name = 'krishna'
      if(true){
          name = 'vamsi krishna'
          console.log(name)
      }
  }

  if(true){
      console.log(name)
  }


