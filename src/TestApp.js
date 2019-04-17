import React from "react";
import Counter from './components/Counter';
// import Todos from './components/Todos';
import store from './store'
import GuessTheFlag from './components/GuessTheFlag';
import Score from './components/Score';

//Kannski er vandamálið hjá mér að counter og todos eru ekki components
//þannig eitthvað conflict gerist þegar ég reyni að
//vísa store niður í gegn með provider


export default function TestApp(){
    return(
        <div>
            <GuessTheFlag />
            <Score />
            {/*<Counter />*/}
            {/*<Todos />*/}
        </div>
    )
}