import {observable} from 'mobx';

const boardState =  new class BoardState {
    @observable sum = 0;

    constructor() {
        this.sum = 0;
    }

    update(val) {
    	this.sum = val;
    }
}();

export default boardState;