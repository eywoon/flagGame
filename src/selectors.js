import {CONTINENT_FILTERS} from "./constants";



//held ég geti auðveldlega mappað inn í nýtt object hér ef ég vil

export default function (store) {
    console.log("Got to selector");
    return store.guessTheFlag.score;
}

// export const getGameState = store => store.guessTheFlag.countries;

export const getScore = store => store.guessTheFlag.score;


export const getOptions = store => store.guessTheFlag.countries;

// export const getCountries = store =>
//     getGameState(store).countries;

// export const fyrstaLag = store =>
//     getCountries(store).map(id => "bla");

//Here we clean up the data by the filter
export const getFilteredOptions = (store, regionFilter) => {
    let allOptions = () => getOptions(store);
    console.log("VAR BEÐIN UM AÐ FILTERA");
    // console.log("ALLT: " + getOptions(store));
    return allOptions.filter(countries => countries.region === 'Africa');


    // switch(regionFilter) {
    //     case CONTINENT_FILTERS.AFRICA:
    //         return allOptions.filter(countries => countries.region === 'Africa');
    //     case CONTINENT_FILTERS.AMERICAS:
    //         return allOptions.filter(countries => countries.region === 'Americas');
    //     case CONTINENT_FILTERS.EUROPE:
    //         console.log("ALLT: " + allOptions);
    //         return allOptions.filter(
    //             countries => countries === 'Europe'
    //             // function(option) {
    //             //     return option.region === 'Europe';
    //             // }
    //         );
    //
    //     case CONTINENT_FILTERS.ASIA:
    //         return allOptions.filter(countries => countries.region === 'Asia');
    //     case CONTINENT_FILTERS.OCEANIA:
    //         return allOptions.filter(countries => countries.region === 'Ocenia');
    //     default:
    //         return allOptions;
    // }
};

