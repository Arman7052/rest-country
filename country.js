// Fetching data //  

const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        displayCountries(data)})
};

// Display data //
const displayCountries = countries => {
    
    allCountriesHTML = countries.map(country => getCountryHTML(country));
    const container = document.getElementById('countries');
    container.innerHTML = allCountriesHTML.join(' ');
}

 const getCountryHTML = ({name, flags, region, capital }) =>{
    return `
        <div class="country">
            <img src="${flags.png}">
            <h2>${name.common}</h2>
            <h3>${capital}</h3>
            
            <p>Continent: ${region}</p>
            
        </div>
    `
}
loadCountries();

// --------------------------- //