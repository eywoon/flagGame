import React from "react";
import {clickOption} from '../actions';
import { connect } from "react-redux";
import store from "../store";


/*
* This component handles clicks in the Guess The Flag gameplay
* */
class Option extends React.Component{
    constructor(props) {
        super(props);

    }

    /*
    * The click handler for the options calles upon the corresponding actions
    * 'OPTION_CLICKED' which is furter defined in the actions.js file
    * */
    handleClick(choice){
        this.props.clickOption(choice);
    }

    render() {
        console.log(this.props.option);
        return(
            <div>
                <li onClick={() => this.handleClick(this.props.option.choice)}>{this.props.option.country}</li>
            </div>
        );
    }
}


export default connect(
    null,
    {clickOption}
)(Option);
