import React, { Component } from 'react'
import mapchart from  '../static/js/mapdata'
import  Chartmap from  '../component/chartmap'
import  Style from  '../css/first.css'
export default class First extends Component {
    render() {
        return (
            <div className={Style.box}>
              <div className={Style.left}>
                <ul>
                    <li><img  src="../static/img/personinfo.jpg"/></li>
                    <li>Hi,Jim阳光</li>
                    <li>岗位:分部主管</li>
                    <li>总积分：2000</li>
                    <li>积分排名:100/2500</li>
                </ul>
              </div>    
              <div className={Style.right}>
                {
                    mapchart.map((item,index)=>{
                        return <Chartmap list={item}   key={index}/>
                    })
                }
               </div> 
            </div>
        )
    }
}