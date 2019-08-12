/*
 * @Description: 
 * @Author: 陈佳
 * @Date: 2019-08-06 16:47:04
 * @LastEditTime: 2019-08-12 11:53:34
 * @LastEditors: 陈佳
 */
import React, { Component } from 'react'
import NavLink from "umi/NavLink"
import Link from "umi/Link"
import Topnav from "../../components/Topnav"
import Footer from "../../components/Footer"
import Styles from "../Find/findex.css"
import { Icon } from 'antd';
const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1337347_z489if9nxlq.js',
});
const headericonstyle = { color: "#D2413B", fontSize: "0.5rem", margin: "0 0.1rem" }
const active = { color: "#554433", width: "0.6rem", background: "pink" }
export default class index extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div >
                <div className={Styles.header} >
                    <Link to="/login">
                        <Icon type="user-add" style={headericonstyle} /></Link>
                    <div style={{ flex: "1", display: "flex", justifyContent: "center" }}>
                        <NavLink exact to={{ pathname: '/friends' }} style={{ color: "#554433", fontSize: "0.4rem" }}>朋友</NavLink>
                        <NavLink to={{ pathname: '/login' }} style={{ color: "#554433", fontSize: "0.4rem" }}>附近</NavLink>
                    </div>
                    <Link to="/login"><Icon type="bar-chart" style={headericonstyle} /></Link>
                </div>

                <div className={Styles.section}>
                    <div style={{ justifyContent:"space-around",fontSize: "0.5rem", height: "0.8rem", lineHeight: "0.8rem", display: "flex" }}>

                        <div>
                        <Link to="/login">
                            <IconFont type="icon-weibiaoti1" style={headericonstyle} />
                            <span style={{color: "#554433",}}>  发动态</span></Link></div>
                        <div>
                        <Link to="/login">
                            <IconFont type="icon-shipin" style={headericonstyle} />
                            <span style={{color: "#554433",}}> 发短视频</span></Link></div>
                    </div>

                    <div className={Styles.sectioncontent}>
                        {this.props.children}
                    </div>
                </div>
                <Footer />
            </div>

        )
    }
}
