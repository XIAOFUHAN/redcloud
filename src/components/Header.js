import React, { Component } from 'react'
import Styles from "../css/share.css";
import { Icon } from 'antd';


export default class Header extends Component {
  render() {
    return (
      <div>
        {/* 头部导航栏 */}
        <div className={Styles.header}>
          {/* <PageHeader onBack={() => null} title="Title" subTitle="This is a subtitle" /> */}
          <span className={Styles.back}><Icon type="left" /></span>
          <span className={Styles.share}><Icon type="desktop" /></span>
        </div>
        {/* 头部导航栏结束 */}
      </div>
    )
  }
}
