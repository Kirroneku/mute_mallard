import React, { Component } from 'react';
import { connect } from 'react-redux';
import { expandInstruction, collapseInstruction } from '../actions/settings';

class Instructions extends Component{
    render(){
        const instructions = (
            <div>
                <h4>Evens or Odds!</h4>
                <p>Simply guess if the next card is even or odd, face cards count as even. A correct guess will net you one point, combos will grant you a point modifier.</p>
                <p>Try to get as many points as you can!</p>
            </div>
        );

        return(
            <div>
            {
                this.props.instructionsExpanded ? (
                    <div>
                        <h2>Instructions</h2>
                        {instructions}
                        <button onClick={this.props.collapseInstruction}>Collapse Instructions</button>
                    </div>
                ) : (
                    <div>
                        <h2>Instructions</h2>
                        <p>Welcome to evens or odds, expand the instructions to learn about the game</p>
                        <button onClick={this.props.expandInstruction}>Expand Instructions</button>
                    </div>
                )
            }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        instructionsExpanded: state.settings.instructionsExpanded
    };
}

const mapDispatchToProps = dispatch => {
    return {
        expandInstruction: () => dispatch(expandInstruction()),
        collapseInstruction: () => dispatch(collapseInstruction())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Instructions);
