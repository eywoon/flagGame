



// Ekki viss afhverju þetta virkar ekki almennilega

export default function (store) {
    console.log("Got to selector");
    return store.guessTheFlag.score;
}

export const bla = () => "bla";

export const getScore = store => store.guessTheFlag.score;