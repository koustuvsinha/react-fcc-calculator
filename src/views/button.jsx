import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Button extends Component {

	render() {
        return (
            <button className="ui fluid secondary button">{this.props.title}</button>
        )
  }

  propTypes = {
  	title: React.PropTypes.string.isRequired
  }
}