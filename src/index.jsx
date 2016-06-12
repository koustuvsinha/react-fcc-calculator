import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';
require("./sass/main.scss");
import $ from 'jquery'
import Calculator from './views/calculator'

/**
const appState =  new class AppState {
    @observable timer = 0;
    
    constructor() {
        setInterval(() => {
            appState.timer += 1;
        }, 1000);
    }
    
    resetTimer() {
        this.timer = 0;
    }
}();

@observer
class TimerView extends Component {
     render() {
        return (
            <div className="container">
                <button onClick={this.onReset}>
                    Seconds passed: {this.props.appState.timer}
                </button>
                <DevTools />
            </div>
        );
     }

     onReset = () => {
     	this.props.appState.resetTimer();
     }
};

ReactDOM.render(<TimerView appState={appState} />, document.getElementById('root'));
**/


class CalculatorView extends Component {
    render() {
        return (
            <div className="ui raised very padded text container segment">
                <Calculator/>
            </div>
        )
    }
}




ReactDOM.render(<CalculatorView/>, document.getElementById('root'));