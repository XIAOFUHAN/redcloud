import React from 'react'
import { PageHeader, Icon, IconFont, List, Avatar } from 'antd';
import Styles from "../css/share.css";

function Footer() {
    const headericonstyle = { color: "#D2413B", fontSize: "0.5rem", margin: "0 0.1rem" }
    const IconFont = Icon.createFromIconfontCN({
        scriptUrl: '//at.alicdn.com/t/font_1337347_z489if9nxlq.js',
    });

    return (
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
    )
}

export default Footer


