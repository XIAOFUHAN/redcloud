/*
 * @Description: 
 * @Author: 陈佳
 * @Date: 2019-08-07 20:39:19
 * @LastEditTime: 2019-08-08 17:28:35
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


export default class Newsong extends Component {
    constructor(props) {
        super(props)
        this.state = {
            reclist: []
        }
    }
    componentDidMount() {
        get("/album/newest").then(data => {
           //  console.log(data.data.albums.splice(0, 6))
            this.setState({
                reclist: data.data.albums.splice(0, 6)
            })
        }).catch(err => {
            console.log(err)
        })
    }
    render() {
        return (
            <div >
                <p>最新音乐</p>
                 <div className={Styles.tjbox}>
                    {
                        this.state.reclist.map(item => {
                            if (item) {
                                return (
                                    <div className={Styles.sig} key={item.id}>
                                        <Link to="login">
                                        <img src={item.picUrl} alt="" className={Styles.sigimg} />
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
