/*
 * @Description: 
 * @Author: 陈佳
 * @Date: 2019-08-06 16:25:37
 * @LastEditTime: 2019-08-10 11:00:28
 * @LastEditors: 陈佳
 */

import React, { Component } from 'react'
import { get, post } from "../../utils/request"
import Styles from "../Find/findex.css"
import { Icon } from 'antd';
import Link from "umi/Link"
import Footer from "../../components/Footer"

const headericonstyle = { color: "#D2413B", fontSize: "0.5rem", margin: "0 0.1rem" }
export default class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {}
        }
    }
    componentDidMount() {
        // get("/login/cellphone", {
        //     phone: "16637649278",
        //     password: "396510345"
        // }).then(data => {
        //    // console.log(data)
        //     this.setState({ data })
        // }).catch(err => {
        //     console.log(err)
        // })
    }
    render() {
        return (
            <div>
                <div className={Styles.header} style={{ borderBottom: "2px solid #ccc" }}>
                   <Link to="/login">
                    <span style={{ color: "#445533", fontSize: "0.3rem", margin: "0 0.2rem" }}>更多</span></Link>
                    <span style={{
                        height: " 0.6rem", flex: "1", lineHeight: "0.6rem", fontWeight: "900", width: "0.8rem",
                        display: "block", textAlign: "center", fontSize: "0.35rem"
                    }}>我的音乐</span>
                   <Link to="/login"> <Icon type="bar-chart" style={headericonstyle} /></Link>
                </div>
                <div className={Styles.section} >
                    {this.props.children}
                </div>
                <Footer />
            </div>
        )
    }
}

