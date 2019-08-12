/*
 * @Description: 
 * @Author: 陈佳
 * @Date: 2019-08-10 22:42:25
 * @LastEditTime: 2019-08-12 13:06:55
 * @LastEditors: 陈佳
 */
import React, { Component } from 'react'
import { get, post } from "../../utils/request"
import Link from "umi/Link"
import { Icon, Row, Col, List, Avatar } from 'antd';
const iconcolor = { color: "#D2413B", fontSize: "0.35rem", textAlign: "center" }
const listyle = { borderBottom: "1px solid #ccc", fontSize: "0.3rem", display: "flex", justifyContent: "flex-start", padding: "0 0.2rem", height: "0.5rem", lineHeight: "0.5rem" }
const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1337347_z489if9nxlq.js',
});
export default class Account extends Component {
    constructor(props) {
        super(props)
        this.state = {
            level: 0,
            info: {}
        }
    }
    componentDidMount() {
        get("/user/detail", {
            uid: 273586505
        }).then(data => {
            console.log(data.data)
            this.setState({
                level: data.data.level,
                info: data.data.profile
            })

        }).catch(err => {

            console.log(err)
        })
    }
    render() {
        return (
            <div>
                <div style={{display:"flex",justifyContent:"space-around",background:"pink"}}>
                    <img src={this.state.info.avatarUrl} alt="" style={{borderRadius:"50%"}}/>
                    <div style={{fontSize:"0.5rem",lineHeight:"0.6rem"}}>
                        <p>{this.state.info.nickname}</p>
                        <p style={{border:"1px solid #ccc",borderRadius:"0.2rem",textAlign:"center",width:"1.5rem",}}>Lv.{this.state.level}</p>
                    </div>
                    <p style={{flex:1,textAlign:"right",lineHeight:""}}>签到</p>
                </div>
                <ul style={{display:"flex",justifyContent:"space-around"}}>
                    <li>
                        <p>动态</p>
                        <p>{this.state.info.eventCount}</p>
                    </li>
                    <li>
                        <p>关注</p>
                        <p>{this.state.info.follows}</p>
                    </li>
                    <li>
                        <p>粉丝</p>
                        <p>{this.state.info.followeds}</p>
                    </li>
                    <li>
                        <p>我的资料</p>

                    </li>
                </ul>
            </div>
        )
    }
}
