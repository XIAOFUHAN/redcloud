import React from 'react'
import { PageHeader, Icon } from 'antd';
import Styles from "../css/playlist.css";

function playlist() {
    return (
        <div className={Styles.main}>
            {/* 头部导航栏 */}
            <div className={Styles.header}>
                {/* <PageHeader onBack={() => null} title="Title" subTitle="This is a subtitle" /> */}
                <span className={Styles.back}><Icon type="left" /></span>
                <span className={Styles.name}>
                    <span className={Styles.songname}>安静</span><br />
                    <span className={Styles.singer}>周杰伦</span>
                </span>
                <span className={Styles.share}><Icon type="share-alt" /></span>
            </div>
            <hr />
            {/* 头部导航栏结束 */}
            {/* 中间内容部分 */}
            <div className={Styles.section}>
                <div className={Styles.round}>
                    <img style={{ width: "2rem", height: "2rem", borderRadius: "50%" }} />
                </div>



            </div>
            <div className={Styles.footer}>
                <div className={Styles.Icontop}>
                    <span><Icon type="heart" /></span>
                    <span><Icon type="download" /></span>
                    <span><Icon type="message" /></span>
                    <span><Icon type="more" /></span>
                </div>
                <div>
                    <audio src="../test/蔡健雅 - 空白格.mp3" autoplay="autoplay" controls="controls"></audio >
                </div>
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
