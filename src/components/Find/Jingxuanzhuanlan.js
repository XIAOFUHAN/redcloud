/*
 * @Description: 
 * @Author: 陈佳
 * @Date: 2019-08-08 16:10:11
 * @LastEditTime: 2019-08-08 18:11:33
 * @LastEditors: 陈佳
 */
import React, { Component } from 'react'
import { get } from "../../utils/request"
import Link from "umi/Link"
import Styles from "./jxzl.module.css"
import { Icon } from 'antd';

const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1337347_z489if9nxlq.js',
});

export default class Jingxuanzhuanlan extends Component {
    constructor(props) {
        super(props)
        this.state = {
            reclist: []
        }
    }
    componentDidMount() {
        get("/program/recommend").then(data => {
            console.log(data.data.programs)//.data)
            this.setState({
                reclist: data.data.programs.splice(0,3)
            })
        }).catch(err => {
            console.log(err)
        })
    }
    render() {
        return (
            <div>
                <p>精选专栏></p>
                <ul className={Styles.jxbox}>
                 {
                     this.state.reclist.map(item=>{
                         return (
                             
                            <li className={Styles.sli} key={item.id}>
                                <Link to="login">
                            <div className={Styles.txtbox}>
                                <h1 style={{fontSize:"0.3rem",height:"1.2rem"}}><span className={Styles.txtspan}>专栏</span>{item.reason}</h1>
                                <p className={Styles.txtp}>阅读  {item.listenerCount}</p>
                            </div>
                      <img src={item.coverUrl} alt="" className={Styles.simg}/></Link></li> 
                         )
                     })
                 }
                  

                </ul> 
            </div>
        )
    }
}
