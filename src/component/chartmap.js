import React, { Component } from 'react'
import  Style  from  '../css/chartmap.css'
export default class Chartmap extends Component {
    render() {
        let {list} =  this.props;
        console.log(list);
        return (
            <div className={Style.box}>
            <div className={Style.top}>
             <p>
                <span className={Style.span}>{list.title}</span> 
             </p>
            {
                list.this=="本月" 
                && 
                <p className={Style.bold}>
                <span className={Style.color}>{list.this}</span> | <span>{list.last}</span>
                </p>   
            }
            {
                list.this=="今日" 
                && 
                <p>
                <select  className={Style.select}>
                 <option>{list.this}</option>
                 <option>{list.last}</option>
                </select>
                </p>   
            }
            </div>
            <div className={Style.main}>
            {
                list.title=="考勤分析" && <div className={Style.round}>
                    <p>{list.lv}</p> 
                    <span></span>
                </div>
            }
            {
                list.title=="日报" && <div className={Style.full}>
                  <p>{list.lv}</p>
                  <span></span>
                </div>
            }
            {
                list.title=="客户(包含下属客户)" && <div className={Style.num}>
                  <p>{list.lv}</p>
                </div>
            }
            {
                list.title=="活动数据" && <canvas className={Style.draw}></canvas>
            }
            {
                list.title!=='活动数据' && <ul>
                    {
                       list.arr.map((item,index)=>{
                           return <li  key={index}>{item.name}: {item.num}</li>
                       }) 
                    }
                </ul>   
            }
            </div>
            </div>
        )
    }
    componentDidMount(){
        let {list} =  this.props;
       
    }
}
