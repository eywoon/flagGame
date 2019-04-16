import store from './store';
/*
* This file defines all the actions we use
* They are the action creators
* They are very good to use for tests as well, which we should
* add later on.
* */

/*
* App actions
* */

/*
* Guess the Flag game mode actions
* */

/*
* When option is clicked, the corresponding id
* has to be sent to check if it matches with the one
* in the flag
* */
export const clickOption =  choice => ({
   type:'OPTION_CLICKED',
    correct: choice
});



/*
* These are all actions just for reference
* but are irrelevant to the flag game.
* Keep them here for now just for references
* */

let todoId = 0;

export const incrementCounter = () => ({
    type: 'INCREMENT'
});

export const decrementCounter = () => ({
    type: 'DECREMENT'
});

export const addTodo = text => ({
    type: 'ADD_TODO',
    text: text,
    id: todoId++
});