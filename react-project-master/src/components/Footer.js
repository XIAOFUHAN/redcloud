/*
 * @Description: 
 * @Author: 陈佳
 * @Date: 2019-08-06 16:47:04
 * @LastEditTime: 2019-08-09 22:23:30
 * @LastEditors: 陈佳
 */
import React, { Component } from 'react'

import Link from "umi/Link"
import Styles from "../pages/Find/findex.css"
import { Icon } from 'antd';
const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1337347_z489if9nxlq.js',
});
const headericonstyle ={ color: "#D2413B", fontSize: "0.5rem", margin: "0 0.1rem" }
export default class index extends Component {

    render() {
        return (
       

                <div className={Styles.footer}>
                    <div className={Styles.footerico}>
                        <Link to="/login"><IconFont type="icon-music" style={headericonstyle} /></Link>
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
            

        )
    }
}
