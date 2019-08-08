import React, { Component, } from 'react'
import Footer from '../components/Footer'
import Styles from "../css/share.css";
import Style from "../css/rankinglist.css";
import { get } from "../utils/request"


import { PageHeader, Icon, IconFont, List, Avatar, Button } from 'antd';

const headericonstyle = { color: "#D2413B", fontSize: "0.5rem", margin: "0 0.1rem" }

export default class rankinglist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      songList: []
    }
  }
  componentWillMount() {
    get('/top/list', { idx: 1 }).then(res => {
      //const songList = res.data.playlist.tracks;
      this.setState({ songList: res.data.playlist.tracks })
      console.log(this.state.songList)
    })
  }
  playSong(id) {
    this.props.history.push({ pathname: '/playlist', query: { id: id } })
  }


  render() {
    return (
      <div className={Style.ranking}>

        {/* 头部导航栏 */}
        <div className={Styles.header}>
          {/* <PageHeader onBack={() => null} title="Title" subTitle="This is a subtitle" /> */}
          <span className={Styles.back}><Icon type="left" /></span>
          <span className={Styles.action}>排行榜</span>
          <span className={Styles.share}><Icon type="appstore" /></span>
        </div>
        {/* 头部导航栏结束 */}
        {/* 中间内容部分 */}
        <div className={Style.sectionmid}>
          <div style={{ height: "4rem", backgroundColor: "#222", borderTop: "1px solid #000" }}>
            <div style={{ width: "2rem", height: "2rem", background: "#fe3", margin: "0.2rem 0.3rem 0.8rem" }}>
              <img src="" />
            </div>
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

          </div>
          <div className={Style.playtitle}>
            <Icon type="play-circle" />
            <div>播放全部</div>
          </div>


          <ul>
            {this.state.songList.map((item, index) => {
              return (
                <li className={Style.listli} key={index} onClick={this.playSong.bind(this, item.id)}>
                  <div className={Style.songindex}>{index + 1}</div>
                  <div className={Style.songitem} >
                    <div className={Style.itemleft}>
                      <div className={Style.itemtitle}>{item.name}</div>
                      <div className={Style.artist}>{item.ar[0].name}</div>
                    </div>
                    <div className={Style.itemright}>
                      <Icon type="ellipsis" />
                    </div>
                  </div>
                </li>
              )
            })

            }
          </ul>
        </div>

        <Footer />

      </div>
    )
  }
}
