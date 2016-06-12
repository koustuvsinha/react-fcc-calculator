import {observable} from 'mobx';

const boardState =  new class BoardState {
    @observable sum = 0;
    @observable dotFlag = false;

    constructor() {
        this.sum = '0';
    }

    update(val) {
    	this.sum = val;
    }

    append(val) {
    	if(this.sum === '0') this.sum = '';
    	if(this.dotFlag && this.sum.indexOf('.') < 0) {
    		this.sum += '.';
    	}
    	this.sum = this.sum + val;
    }

    pop() {
    	this.sum = this.sum.slice(0,-1);
    	if(this.sum.indexOf('.') == this.sum.length - 1) {
    		this.sum = this.sum.slice(0,-1);
    		this.dotFlag = false;
    	}
    }

    clear() {
    	this.sum = '0';
    	this.dotFlag = false;
    }
}();

export default boardState;