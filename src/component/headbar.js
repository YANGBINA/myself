import React, { Component,Fragment } from 'react'
import  Style from '../css/app.css'
import {
    Route,
    Switch,
    NavLink
} from 'react-router-dom';
export default class Head extends Component {
    constructor(props){
        super(props)
    }
    render() {
        let  {list} = this.props;
        return (
            <Fragment>
            <div className={Style.box}>
              <p>
                <img src="../static/img/head.jpg" />
                <b>艾的教育</b>
                <span className={Style.two}>Ideal Education</span>
              </p>
              <ul className={Style.ul}>
              {
                list.map((item,index)=>{
                    return  <li key={index}>
                    <NavLink to={item.path}>
                    {item.name}
                    </NavLink>
                    </li>
                })  
              }    
              </ul>
              <div className={Style.sunshine}>
              Jim阳光
              </div> 
              <div className={Style.info}>
                <i className="iconfont icon-07"></i>
                <span>通知栏</span> 
              </div>
            </div>
            <Switch>
            {
                list.map((item,index)=>{
                return <Route  key={index} path={item.path}  component={item.component}  />
                })
            }
            </Switch>
           </Fragment> 
        )
    }
}