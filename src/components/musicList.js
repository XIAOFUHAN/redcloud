import React, { Component } from 'react'
import Style from "../css/rankinglist.css";
import { get } from "../utils/request"
import { PageHeader, Icon, IconFont, List, Avatar, Button } from 'antd';

export default class musicList extends Component {
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
      <div>
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
    )
  }
}
