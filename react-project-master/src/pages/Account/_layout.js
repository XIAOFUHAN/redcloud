/*
 * @Description: 
 * @Author: 陈佳
 * @Date: 2019-08-06 16:47:04
 * @LastEditTime: 2019-08-12 12:03:41
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
                    <Link to="/account" style={{flex:"1",color: "#554433",fontSize: "0.5rem",textAlign:"center"}}>账户</Link>
                    <Link to="/login"><Icon type="bar-chart" style={headericonstyle} /></Link>
                </div>

                <div className={Styles.section}>
                    <div className={Styles.sectioncontent}>
                        {this.props.children}
                    </div>
                </div>
                <Footer />
            </div>

        )
    }
}
