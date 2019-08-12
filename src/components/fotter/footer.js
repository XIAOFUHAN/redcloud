import React, { Component } from 'react';
import Link from 'umi/link';
import { Icon, Avatar, Button, Input, Tooltip } from 'antd';
import Styles from './footer.css';
export default class footer extends Component {
  render() {
    const IconFont = Icon.createFromIconfontCN({
      scriptUrl: '//at.alicdn.com/t/font_1337347_z489if9nxlq.js'
    });
    const headericonstyle = {
      color: '#D2413B',
      fontSize: '0.3rem',
      margin: '0 0.1rem'
    };

    return (
      <div className={Styles.footer}>
        <Link to={{ pathname: '/' }}>
          <div className={Styles.footerico}>
            <IconFont type="icon-music" style={headericonstyle} />
            <p>发现音乐</p>
          </div>
        </Link>
        <Link to={{ pathname: '/' }}>
          <div className={Styles.footerico}>
            <IconFont type="icon-music3yinle" style={headericonstyle} />
            <p>我的音乐</p>
          </div>
        </Link>
        <Link to={{ pathname: '/' }}>
          <div className={Styles.footerico}>
            <Icon type="team" style={headericonstyle} />
            <p>朋友</p>
          </div>
        </Link>
        <Link to={{ pathname: '/' }}>
          <div className={Styles.footerico}>
            <Icon type="user" style={headericonstyle} />
            <p>账号</p>
          </div>
        </Link>
      </div>
    );
  }
}
