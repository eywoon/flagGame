
// const countryApi = "I'm the api :P ";
// export default countryApi;


class CountryApi {
    static getAllCountries(){
        console.log("CALLED API");
        return fetch('https://restcountries.eu/rest/v2/all')
            .then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
}


export default CountryApi;