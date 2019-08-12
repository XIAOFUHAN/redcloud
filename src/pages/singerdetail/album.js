import React, { Component } from "react";
import { get } from "../../utils/request";
import style2 from "./album.css";
export default class album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    var id = this.props.location.query.id;
    if (id ) {
      localStorage.setItem("user_id", id);
    } else {
      id = localStorage.getItem("user_id");
    }
    get("/artist/album", { id: id, limit: 15 }).then(res => {
      console.log(res.data.hotAlbums);
      this.setState({ list: res.data.hotAlbums });
    }).catch(error=>{
      console.log(error)
    });;
  }

  render() {
    return (
      <div>
        <ul className={style2.bot}>
          {this.state.list.map((item, i) => {
            return (
              <li key={i} className={style2.nm}>
                <img
                  src={item.blurPicUrl}
                  alt="图片加载失败"
                  className={style2.cn}
                />
                <span className={style2.ncc}>{item.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
