import React, { Component } from 'react';
import './style.scss'
import TransferList  from "./TransferList"
export default class MainTransIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list1: [],
            list2: []
        }
    }
//Sending Props to Functional Component
    render() {
        return (
            <><TransferList props={this.state} /></>
        )
    }

}