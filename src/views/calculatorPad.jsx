import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import DisplayBoard from './displayBoard'
import Button from './button'

export default class CalculatorPad extends Component {
	render() {
        return (
            <div>
                <div className="row calculator-pad">
                	<div className="col-xs-3"><Button title="AC"/></div>
                	<div className="col-xs-3"><Button title="CE"/></div>
                	<div className="col-xs-3"><Button title="%"/></div>
                	<div className="col-xs-3"><Button title="/"/></div>
                </div>
                <div className="row calculator-pad">
                    <div className="col-xs-3"><Button title="7"/></div>
                    <div className="col-xs-3"><Button title="8"/></div>
                    <div className="col-xs-3"><Button title="9"/></div>
                    <div className="col-xs-3"><Button title="*"/></div>
                </div>
                <div className="row calculator-pad">
                    <div className="col-xs-3"><Button title="4"/></div>
                    <div className="col-xs-3"><Button title="5"/></div>
                    <div className="col-xs-3"><Button title="6"/></div>
                    <div className="col-xs-3"><Button title="-"/></div>
                </div>
                <div className="row calculator-pad">
                    <div className="col-xs-3"><Button title="1"/></div>
                    <div className="col-xs-3"><Button title="2"/></div>
                    <div className="col-xs-3"><Button title="3"/></div>
                    <div className="col-xs-3"><Button title="+"/></div>
                </div>
                <div className="row calculator-pad">
                    <div className="col-xs-3"><Button title="."/></div>
                    <div className="col-xs-3"><Button title="0"/></div>
                    <div className="col-xs-3"><Button title="Ans"/></div>
                    <div className="col-xs-3"><Button title="="/></div>
                </div>
            </div>
        )
    }
}