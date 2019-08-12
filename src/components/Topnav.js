/*
 * @Description: 
 * @Author: 陈佳
 * @Date: 2019-08-06 16:47:04
 * @LastEditTime: 2019-08-10 11:01:02
 * @LastEditors: 陈佳
 */
import React, { Component } from 'react'
import Link from "umi/Link"
import Styles from "../pages/Find/findex.css"
import { Icon } from 'antd';
const headericonstyle ={ color: "#D2413B", fontSize: "0.5rem", margin: "0 0.1rem" }
export default class index extends Component {
   
    render() {
        return (
            
                <div className={Styles.header}>
                    <Link to="/login">
                    <Icon type="audio" theme="filled" style={headericonstyle} /></Link>
                    <input type="text" placeholder="搜索音乐、歌词、电台" className={Styles.headeript} onFocus={()=>{
                        this.props.history.push("/login")
                    }}/>
                    <Link to="/login"><Icon type="bar-chart" style={headericonstyle} /></Link>
                </div>
               
           

        )
    }
}
