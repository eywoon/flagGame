import React from "react";
import Option from './Option';
import { connect } from "react-redux";
import { getOptions } from '../apis/staticApi';



/*
* This component renders the four options that are
* shown with each flag
* */
// class Options extends React.Component{
//     constructor(props){
//         super(props);
//     }





    const Options = ({ options }) => (
        <div>
            <h2>Options</h2>
            <ul>
                {options.map((option) => {
                    return <Option key={option.id} option={option}/>;
                })}
            </ul>
        </div>
    );

    const mapStateToProps = state => {
        const options = getOptions(state);
        return {options};
    };


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



export default connect(mapStateToProps)(Options);

