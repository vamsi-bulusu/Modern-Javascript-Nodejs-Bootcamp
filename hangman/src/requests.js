const getPuzzle = async (wordCount) => {    
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)    
    if(response.status === 200){
            const data = await response.json()
            return data.puzzle
        } else{
            throw new Error('Unable to fetch data')
    }
}

const getCurrentCountry = async () => {
    const location = await geoLocation()
    return getCountry(location.country) 
}


const getCountry = async (countryCode) => {
    const response = await fetch('//restcountries.eu/rest/v2/all')
        if(response.status === 200){
            const countries = await response.json() 
            return countries.find((country) => country.alpha2Code === countryCode)
        }else{
            throw new Error('Unable to fetch data')
        }
}

const geoLocation = async () => {
    const response = await fetch('//ipinfo.io/json?token=9dfe66d2ba5428')
        if(response.status === 200){
            return response.json()
        } else{
            throw new Error('Unable to fetch data')
        }
}

export { getPuzzle as default }