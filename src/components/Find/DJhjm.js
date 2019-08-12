/*
 * @Description: 
 * @Author: 陈佳
 * @Date: 2019-08-08 16:10:11
 * @LastEditTime: 2019-08-09 10:50:28
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

export default class DJhjm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }
    componentDidMount() {
        get("/dj/today/perfered").then(data => {
            console.log(data.data.data)
            this.setState({
            list: data.data.data
            })
        }).catch(err => {
            console.log(err)
        })
    }
    render() {
        return (
            <div>
                <p>每天听写好节目></p>
                <ul className={Styles.jxbox}>
                 {
                     this.state.list.map(item=>{
                         return (
                             
                            <li className={Styles.sli} key={item.id}>
                                <Link to="/login">
                            <div className={Styles.txtbox} style={{float:"right"}}>
                                <h1 style={{fontSize:"0.3rem",height:"1rem"}}>{item.rcmdText}</h1>
                                <p className={Styles.txtp}>{item.lastProgramName}</p>
                            </div>
                      <img src={item.picUrl} alt="" className={Styles.simg} style={{float:"left"}}/></Link></li> 
                         )
                     })
                 }
                  

                </ul> 
            </div>
        )
    }
}
