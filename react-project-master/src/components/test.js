/*
 * @Description: 
 * @Author: 陈佳
 * @Date: 2019-08-06 16:47:04
 * @LastEditTime: 2019-08-07 17:06:28
 * @LastEditors: 付涵
 */
import React, { Component } from 'react'
// import { NavLink, BrowserRouter as Router, Route } from 'react-router-dom'
import Songlist from "../../components/Find/Songlist"
// import Recommendation from "../../components/Find/Recommendation"
import Rank from "../../components/Find/Rank"
// import Hoststation from "../../components/Find/Hoststation"
import Link from "umi/Link"
import Styles from "./findex.css"
import { Input, Icon, Tabs } from 'antd';
const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1337347_z489if9nxlq.js',
});
const { TabPane } = Tabs;
const size = "small"
function callback(key) {
    console.log(key);//路由跳转
}
const headericonstyle = { color: "#D2413B", fontSize: "0.5rem", margin: "0 0.1rem" }

const activestyle = { color: "#D2413B" }
const linkfontcolor = { color: "#445533" }
export default class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "slist",
        }
    }
    render() {
        const Content = () => {
            if (this.state.name == "slist") {
                return <Songlist />
            }
            if (this.state.name == "rank") {
                return <Rank />
            }

        }
        return (
            <div>
                <div className={Styles.header}>
                    <Icon type="audio" theme="filled" style={headericonstyle} />
                    <input type="text" placeholder="搜索音乐、歌词、电台" className={Styles.headeript} />
                    <Icon type="bar-chart" style={headericonstyle} />
                </div>
                <div className={Styles.section}>
                    <div className={Styles.sectionnav}>
                        <span style={linkfontcolor} onClick={() => {
                            this.setState({
                                name: "slist"
                            })
                        }}>歌单</span>
                        <span style={linkfontcolor} onClick={() => {
                            this.setState({
                                name: "rank"
                            })
                        }}>排行榜</span>
                        <span style={linkfontcolor}>歌单</span>
                        <span style={linkfontcolor}>歌单</span>
                    </div>
                    <div>
                        <Content />
                        {/* <Songlist /> */}
                    </div>
                </div>

                <div className={Styles.footer}>
                    <div className={Styles.footerico}>
                        <IconFont type="icon-music" style={headericonstyle} />
                        <p>发现音乐</p>
                    </div>
                    <div className={Styles.footerico}>
                        <IconFont type="icon-music3yinle" style={headericonstyle} />
                        <p>我的音乐</p>
                    </div>
                    <div className={Styles.footerico}>
                        <Icon type="team" style={headericonstyle} />
                        <p>朋友</p>
                    </div>
                    <div className={Styles.footerico}>
                        <Icon type="user" style={headericonstyle} />
                        <p>账号</p>
                    </div>
                </div>
            </div>

        )
    }
}
