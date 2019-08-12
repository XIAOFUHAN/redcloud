import React, { Component } from 'react'
import { get } from "../../utils/request"
import Style from "./playsonglist.css"

import { PageHeader, Icon, IconFont, List, Avatar, Button } from 'antd';
export default class playsonglist extends Component {
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
      <div style={{ height: "100%" }}>
        <div className={Style.listheader}></div>
        <div className={Style.listfooter}
          style={{ height: "8rem", position: "fixed", 
          bottom: "0.7rem", overflow: "auto", 
          backgroundColor:"#fff",
          zIndex: "1000" }}>
          <div className={Style.playtitle} style={{ position: "fixed", bottom: "8.59rem",width:"100%",height:"0.6rem" }}>
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
        <div style={{ position: "fixed", bottom: "0", width: "100%",zIndex:"100" }}>
          <Button style={{ width: "100%", backgroundColor: "#D2413B", color: "#fff" }}>关闭</Button>
        </div>
      </div>

    )
  }
}
