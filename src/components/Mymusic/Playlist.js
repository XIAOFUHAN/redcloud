/*
 * @Description: 
 * @Author: 陈佳
 * @Date: 2019-08-09 21:59:42
 * @LastEditTime: 2019-08-10 22:52:49
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
export default class Playlist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }
    componentDidMount() {
        get("/user/playlist", {
            uid: 273586505
        }).then(data => {
            console.log(data.data.playlist)
             this.setState({ list: data.data.playlist }) 
        }).catch(err => {

            console.log(err)
        })
    }
    render() {
      
        return (
            <div style={{padding:"0 0.2rem"}}> 
                <p>我创建的歌单（{this.state.list.length}）</p>
                <List
                    itemLayout="horizontal"
                    dataSource={this.state.list}
                    renderItem={item => (
                        <List.Item style={{overflow:"hidden",height:"1.4rem"}}>
                            <List.Item.Meta
                                avatar={<Avatar src={item.coverImgUrl} style={{borderRadius:"0",width:"1rem",height:"1rem"}}/>}
                                title={<a href="/login">{item.name}</a>}
                                description={item.trackCount+"首"}
                             />
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}