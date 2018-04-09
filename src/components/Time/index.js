import React, {Component} from 'react';
import { observer, inject } from 'mobx-react';
import Store from './store';
const stores = new Store();

@inject('store')
@observer
export default class Time extends Component{
    componentDidMount(){
        stores.refreshTime();
    }
    render(){
        return(
            <h2>Time:{stores.time}</h2>
        )
    }
}