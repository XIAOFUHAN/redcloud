import React, { Component } from 'react'
import { get } from "../utils/request"
import Style from "../css/recommendation.css"
import { Icon } from "antd"

export default class recommendation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      MVList: []
    }
  }
  componentWillMount() {
    get('/related/allvideo', { id: "89ADDE33C0AAE8EC14B99F6750DB954D" }).then(res => {
      //const MVList =  res.data.urls[0];
      this.setState({ MVList: res.data.data });
      console.log(this.state.MVList)
    })
  }



  render() {

    return (
      <div style={{marginBottom:"0.8rem"}}>
        <ul>
          {
            this.state.MVList.map((item, index) => {
              return (
                <li className={Style.listli} key={index} style={{ marginBottom: "0.3rem" }}>

                  <div className={Style.songindex}>
                    <img src={item.coverUrl} style={{ width: "2rem", height: "1.5rem" }} />
                  </div>
                  <div className={Style.songitem} >
                    <div className={Style.itemleft}>
                      <div className={Style.itemtitle}>{item.title}</div>
                      <div className={Style.artist}>{item.creator[0].userName}</div>
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
