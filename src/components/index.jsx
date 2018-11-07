import React, { Component,Fragment } from 'react';
import Headbar from '../component/headbar'
import  list from  '../static/js/index'
export default class Index extends Component {
    render() {
        return (
            <Fragment>
            <Headbar list={list} />
            </Fragment>
        );
    };
};
