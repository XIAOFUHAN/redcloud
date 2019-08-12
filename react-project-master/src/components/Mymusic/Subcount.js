/*
 * @Description: 
 * @Author: 陈佳
 * @Date: 2019-08-09 21:59:42
 * @LastEditTime: 2019-08-10 10:02:10
 * @LastEditors: 陈佳
 */
import React, { Component } from 'react'
import { get, post } from "../../utils/request"
import Link from "umi/Link"
import { Icon, Row, Col } from 'antd';
const iconcolor = { color: "#D2413B",fontSize:"0.35rem",textAlign:"center"}
const listyle={borderBottom:"1px solid #ccc",fontSize:"0.3rem",display:"flex",justifyContent:"flex-start",padding:"0 0.2rem",height:"0.5rem",lineHeight:"0.5rem"}
const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1337347_z489if9nxlq.js',
});
export default class subcount extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {}
        }
    }
    componentDidMount() {
        get("/user/subcount").then(data => {
            console.log(data.data)
            this.setState({ data:data.data })
        }).catch(err => {
            this.setState({
                data:{
                    subPlaylistCount:0,
                    mvCount:0,
                    createDjRadioCount:0,
                    artistCount:0
                }
            })
            console.log(err)
        })
    }
    render() {
        return (
            <div>
             <ul >
                 <li style={listyle}>
                   <span style={{width:"0.6rem"}}><IconFont type="icon-music3yinle" style={iconcolor} /></span> 
                   <span style={{width:"1.5rem"}}>本地音乐</span>
                    <span style={{flex:1,textAlign:"right"}}>{this.state.data.artistCount}&nbsp;></span>
                 </li>
                 <li style={listyle}>
                   <span style={{width:"0.6rem"}}><Icon type="play-circle" theme="filled"style={iconcolor} /></span> 
                 
                   <span style={{width:"1.5rem"}}>最近播放</span>
                    <span style={{flex:1,textAlign:"right"}}>{this.state.data.subPlaylistCount}&nbsp;></span>
                 </li>
                 <li style={listyle}>
                   <span style={{width:"0.6rem"}}><IconFont type="icon-music" style={iconcolor} /></span> 
                   <span style={{width:"1.5rem"}}>我的电台</span>
                    <span style={{flex:1,textAlign:"right"}}>{this.state.data.createDjRadioCount}&nbsp;></span>
                 </li>
                 <li style={listyle}>
                   <span style={{width:"0.6rem"}}><Icon type="star" theme="filled"  style={iconcolor} /></span> 
                   <span style={{width:"1.5rem"}}>我的收藏</span>
                    <span style={{flex:1,textAlign:"right"}}>{this.state.data.mvCount}&nbsp;></span>
                 </li>
             </ul>
            </div>
        )
    }
}