import React, {PropTypes} from "react";
import Option from './Option';
import { connect } from "react-redux";
// import { getOptions } from '../apis/staticApi';
import { loadCountries} from "../actions";
import { getFilteredOptions, getOptions } from '../selectors';
import store from '../store';

/*
* This component renders the four options that are
* shown with each flag
* Options is a container component as it needs to be aware of the application state
* */
// class Options extends React.Component{
//     constructor(props){
//         super(props);
//     }




    //Sendir amk rétt region niður

//ATH, ég set aftur inn frekar selector eins og einfalda API sem sækir relevant
//optionslista

    const Options = ({ countries }) => (
        <div>
            {console.log("FÉKK PROPS: " + store.getState())}
            <h2>Options</h2>
            <ul>

                {countries.map((country) => {
                return <Option key={country.id} option={country}/>;
            })}
            </ul>
        </div>
    );



    const mapStateToProps = state => {
        //loadCountries er selector sem sækir filteraðan lista,
        //sem er filteraður á undan, þegar continent er valin
        const { visibilityFilter } = state;
        const options = getFilteredOptions(state, visibilityFilter);
        // const options = getOptions(state);
        // const options = store.getState();
        console.log("options frá options " + options);
        return {options};
    };

    // function mapStateToProps(state, ownProps) {
    //     // state = {cats: [{id:1, name: "Maru"}, etc.]}
    //     return {
    //         countries: state.guessTheFlag.countries
    //     };
    // }


    //Kannski á þetta ekki að vera render aðferð þá?
    // render(){
    //     console.log(this.props.options);
    //     return(
    //         <div>
    //             <h2>Options</h2>
    //             <ul>
    //                 {this.props.options.map((option) => {
    //                     return <Option key={option.id} option={option}/>;
    //                 })}
    //             </ul>
    //         </div>
    //     );
    // }
// }

// Options.propTypes = {
//     //ensure that countries are contained in an array
//     countries: PropTypes.array.isRequired
// };

// Options.propTypes = {
//     countries: PropTypes.array.isRequired
// };

/*Only container components are connected to the store, that is if they're stateful
* A container component is aware of the application state
* It can pass state through to presentational components through props
* */
export default connect(mapStateToProps)(Options);

