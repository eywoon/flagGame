import React, {PropTypes} from "react";
import Options from './Options';
import Flag from './Flag';
import { connect } from "react-redux";
import store from '../store';

import {getOptions, getFlag} from "../apis/staticApi";


/*
* This component holds the whole gameplay for Guess the flag
* Here you can very clearly see in the constructor how the UI state is kept separate
* from the store state by looking at the state in re constructor.
* It makes it easier to follow what's going on and keep the UI state
* cleaner and removes some the high coupling. This is another main feature of redux.
* */
class GuessTheFlag extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            options: [],
            flag:'NO FLAG'
        };
    }

    /*
    * Í todolistanum er ekkert render fall í þessum topp klasa
    * */
    handleFlagClick = () => {
        // const flag = getFlag();
        // console.log(flag);
        // this.setState({flag : flag});
        // console.log(this.state.flag);
    };



    handleOptionClick= () =>{

        // const options = getOptions();
        // const flag = getOptions();
        // this.setState({
        //     options: options
        // });

    };


    // GuessTheFlag.proptypes = {
    //
    // };

    render() {
        return (
            <div>
                <h1>GUESS THE FLAG </h1>
                {/*<div onClick={this.handleOptionClick}>Press to get Options</div>*/}
                {/*<div onClick={this.handleFlagClick}>Press to get Flag</div>*/}
                <Flag flag={this.state.flag}/>
                <Options options={this.state.options}/>
            </div>
        );
    }
}



/*Connect function can be thought of what replaces the observer in the
* observer pattern or as a pub/sub patters. It subscribes to the redux store.
* I recommend reading up on it if interested.
* */
export default connect(
    null,
    null
)(GuessTheFlag);