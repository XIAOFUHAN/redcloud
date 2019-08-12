/*
 * @Description: 
 * @Author: 陈佳
 * @Date: 2019-08-10 22:42:25
 * @LastEditTime: 2019-08-12 11:51:59
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
export default class Events extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }
    componentDidMount() {
        get("/user/event", {
            uid:32953014
        }).then(data => {
            console.log(data.data.events[7].json)
            //  this.setState({ list: data.data.playlist }) 
        }).catch(err => {

            console.log(err)
        })
    }
    render() {
        console.log(this.state.list.length)
        return (
            <div>
                 {
                     
                    this.state.list.length<=0?<div>还没有发布任何动态-----</div>:<div>ddddddd</div>
                }
            </div>
        )
    }
}
