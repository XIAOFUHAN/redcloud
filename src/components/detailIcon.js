import React, { Component } from 'react'
import { Icon } from 'antd';
import Style from "../css/share.css"

const headericonstyle = { color: "#D2413B", fontSize: "0.5rem", margin: "0 0.1rem" }
export default class detailIcon extends Component {
  render() {
    return (
      <div className={Style.section}>
        <div className={Style.midico}>
          <Icon type="folder-add" style={headericonstyle} />
          <p>发现音乐</p>
        </div>
        <div className={Style.midico}>
          <Icon type="appstore" style={headericonstyle} />

          <p>我的音乐</p>
        </div>
        <div className={Style.midico}>
          <Icon type="share-alt" style={headericonstyle} />

          <p>朋友</p>
        </div>
        <div className={Style.midico}>
          <Icon type="arrow-down" style={headericonstyle} />

          <p>账号</p>
        </div>
      </div>
    )
  }
}
