/*
 * @Description: 
 * @Author: 陈佳
 * @Date: 2019-08-06 16:47:04
 * @LastEditTime: 2019-08-09 21:58:11
 * @LastEditors: 陈佳
 */
import React, { Component } from 'react'
import NavLink from "umi/NavLink"
import Topnav from "../../components/Topnav"
import Footer from "../../components/Footer"
import Styles from "./findex.css"
import { Icon } from 'antd';
const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1337347_z489if9nxlq.js',
});
const headericonstyle ={ color: "#D2413B", fontSize: "0.5rem", margin: "0 0.1rem" }
export default class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: "recommendation",
        }
    }
    render() {
        return (
            <div >
                <Topnav/>
                <div className={Styles.section}>
                    <div className={Styles.sectionnav}>
                        <NavLink exact to={{ pathname: '/find' }} style={{ color: "#554433" }}>个性推荐</NavLink>
                        <NavLink to={{ pathname: '/find/songlist' }} style={{ color: "#554433" }}>歌单</NavLink>
                        <NavLink to={{ pathname: '/find/hoststation' }} style={{ color: "#554433" }}>电台主播</NavLink>
                        <NavLink to={{ pathname: '/find/rank' }} style={{ color: "#554433" }}>排行榜</NavLink>
                    </div>
                    <div className={Styles.sectioncontent}>
                        {this.props.children}
                    </div>
                </div>
                <Footer/>
            </div>

        )
    }
}
