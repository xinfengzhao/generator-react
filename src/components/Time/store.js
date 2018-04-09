import { observable, action } from 'mobx';

export default class Store {
    @observable time = 0;

    @action.bound refreshTime() {
        setInterval(() => this.time += 1, 1000);
    };
}