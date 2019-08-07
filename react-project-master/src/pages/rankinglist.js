import React, { Component } from 'react'
import Footer from '../components/Footer'
import Styles from "../css/share.css";
import Style from "../css/rankinglist.css";
import { PageHeader, Icon, IconFont, List, Avatar } from 'antd';

const headericonstyle = { color: "#D2413B", fontSize: "0.5rem", margin: "0 0.1rem" }


export default class rankinglist extends Component {


    render() {
        return (
            <div>
                {/* 头部导航栏 */}
                <div className={Styles.header}>
                    {/* <PageHeader onBack={() => null} title="Title" subTitle="This is a subtitle" /> */}
                    <span className={Styles.back}><Icon type="left" /></span>
                    <span className={Styles.action}>排行榜</span>
                    <span className={Styles.share}><Icon type="appstore" /></span>
                </div>
                <hr />
                {/* 头部导航栏结束 */}
                {/* 中间内容部分 */}
                <div style={{ height: "3rem", backgroundColor: "#222" }}>
                    <img src="" />

                    <div className={Style.section}>
                        <div className={Styles.midico}>
                            <Icon type="folder-add" style={headericonstyle} />
                            <p>发现音乐</p>
                        </div>
                        <div className={Styles.midico}>
                            <Icon type="appstore" style={headericonstyle} />

                            <p>我的音乐</p>
                        </div>
                        <div className={Styles.midico}>
                            <Icon type="team" style={headericonstyle} />
                            <p>朋友</p>
                        </div>
                        <div className={Styles.midico}>
                            <Icon type="user" style={headericonstyle} />
                            <p>账号</p>
                        </div>
                    </div>

                </div>

                <div>

                </div>







                <div>
                    <Footer />
                </div>
            </div>
        )
    }
}
