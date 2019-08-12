/*
 * @Description: 
 * @Author: 陈佳
 * @Date: 2019-08-08 16:10:11
 * @LastEditTime: 2019-08-08 17:33:56
 * @LastEditors: 陈佳
 */
import React, { Component } from 'react'
import { get } from "../../utils/request"
import Link from 'umi/Link'
import Styles from "./Reclist.module.css"
import { Icon } from 'antd';
const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1337347_z489if9nxlq.js',
});

export default class Diantaituijian extends Component {
    constructor(props) {
        super(props)
        this.state = {
            reclist: []
        }
    }
    componentDidMount() {
        get("/dj/today/perfered").then(data => {
            console.log(data.data.data)
            this.setState({
                reclist: data.data.data
            })
        }).catch(err => {
            console.log(err)
        })
    }
    render() {
        return (
            <div>
                <p>主播电台></p>
                <div className={Styles.tjbox} style={{height:"3.4rem"}}>
                    {
                        this.state.reclist.map(item => {
                          
                                return (
                                    <div className={Styles.sig} key={item.id}>
                                        <Link to="login">
                                        <img src={item.picUrl} alt="" className={Styles.sigimg} />
                                        </Link>
                                        <h5 className={Styles.sigp}>{item.rcmdText}</h5>
                                    </div>
                                )
                         

                        })
                    }

                </div> 
            </div>
        )
    }
}
