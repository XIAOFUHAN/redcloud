import React from 'react'
import { PageHeader, Icon } from 'antd';
import Styles from "../css/playlist.css";
import { getMusics } from "../services/music";

function playlist() {


    return (
        <div className={Styles.main}>
            {/* 头部导航栏 */}
            <div className={Styles.header}>
                {/* <PageHeader onBack={() => null} title="Title" subTitle="This is a subtitle" /> */}
                <span className={Styles.back}><Icon type="left" /></span>
                <span className={Styles.fmname}>
                    <span className={Styles.fmmid}><span className={Styles.fmicon}><Icon type="customer-service" /></span><br /><span>私人FM</span></span>
                    <span className={Styles.fmmid}><span className={Styles.fmicon}><Icon type="cloud" /></span><br /><span>跑步FM</span></span>
                </span>
                <span className={Styles.share}><Icon type="share-alt" /></span>
            </div>
            <hr />
            {/* 头部导航栏结束 */}
            {/* 中间内容部分 */}
            <div className={Styles.section}>

                <img style={{ width: "4rem", height: "4rem", backgroundColor: "black" }} />

            </div>
            {/* 底部内容 */}
            <div >
                <div className={Styles.Iconbottom}>
                    <span><Icon type="sync" /></span>
                    <span><Icon type="step-backward" /></span>
                    <span className={Styles.play}><Icon type="play-circle" /></span>
                    <span><Icon type="step-forward" /></span>
                    <span><Icon type="unordered-list" /></span>
                </div>


            </div>
        </div>
    )
}

export default playlist
