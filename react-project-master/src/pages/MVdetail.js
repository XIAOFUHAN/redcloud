import React, { Component } from 'react'
import Header from "../components/Header"
import DetailIcon from "../components/detailIcon"
import Recommendation from "../components/recommendation"
import MVfooter from "../components/MVfooter"
import Style from "../css/detailIcon.css"
import { get } from "../utils/request"

import { Input, Select, Icon } from 'antd';

export default class MVdetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      MVList: ""
    }
  }
  componentWillMount() {
    get('/video/url', { id: "89ADDE33C0AAE8EC14B99F6750DB954D" }).then(res => {
      //const MVList =  res.data.urls[0];
      this.setState({ MVList: res.data.urls[0].url });
      console.log(res)

    })
  }


  render() {
   
    return (
      <div>
        <Header />
        <div>
          <video style={{ height: "4rem", width: "100%", marginTop: "1rem" }} controls autoPlay src={this.state.MVList}>

          </video>
        </div>
        <div >
          <div className={Style.songname} >
            <span>晴天</span>
            <span><Icon type="caret-down" /></span>
          </div>
          <div className={Style.songdetail}>
            <span>歌手：</span>
            <span>播放：</span>
          </div>
        </div>
        {/* 图标组件 */}
        <div className={Style.detailIcon}>
          <DetailIcon />
        </div>
        <hr />
        {/* 相关推荐 */}
        <div className={Style.playtitle}>
          <div>相关推荐</div>
        </div>
        <Recommendation />
        {/* 评论功能 */}
        <MVfooter/>
      </div>
    )
  }
}
