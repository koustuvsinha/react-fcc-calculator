import {observable} from 'mobx';

const boardState =  new class BoardState {
    @observable sum = 0;

    constructor() {
        this.sum = 0;
    }

    update(val) {
    	this.sum = val;
    }

    append(val) {
    	this.sum = this.sum * 10 + val;
    }

    pop() {
    	this.sum = Math.floor(this.sum / 10);
    }

    clear() {
    	this.sum = 0;
    }
}();

export default boardState;