/*
 * @Description: 全球榜
 * @Author: 陈佳
 * @Date: 2019-08-07 20:39:19
 * @LastEditTime: 2019-08-09 20:41:59
 * @LastEditors: 陈佳
 */
import React, { Component } from 'react'
import { get } from "../../utils/request"
import Link from "umi/Link"
import Styles from "./Reclist.module.css"
import { Icon } from 'antd';
const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1337347_z489if9nxlq.js',
});


export default class Grank extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }
    componentDidMount() {
        get('/toplist/detail').then(data => {
            console.log(data.data.list.splice(0,12))
            this.setState({
            list: data.data.list.splice(0,12)
            })
        }).catch(err => {
            console.log(err)
        })
    }
    render() {
        return (
            <div >
                <p>&nbsp;全球榜</p>
                 <div className={Styles.tjbox}>
                    {
                        this.state.list.map(item => {
                            if (item) {
                                return (
                                    <div className={Styles.sig} key={item.id}>
                                        <Link to="login">
                                        <img src={item.coverImgUrl} alt="" className={Styles.sigimg} style={{borderRadius:"0"}} />
                                        </Link>
                                        <h5 className={Styles.sigp}>{item.name}</h5>
                                    </div>
                                )
                            } else {
                                return <h2>这个接口不稳</h2>
                            }

                        })
                    }

                </div> 
            </div>
        )
    }
}
