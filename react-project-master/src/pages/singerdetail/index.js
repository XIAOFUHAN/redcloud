import React, { Component } from "react";
import { Icon } from "antd";
import { get } from "../../utils/request";
import style1 from "./index.css";
export default class Recommendation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    var id = this.props.location.query.id;
    if (id) {
      localStorage.setItem("user_id", id);
    } else {
      id = localStorage.getItem("user_id");
    }
    get("/artists", { id: id ,limit:20}).then(res => {
      //console.log(res.data)
      this.setState({ list: res.data.hotSongs, id: id });
    }).catch(error=>{
      console.log(error)
    });
  }

  render() {
    return (
      <div>
        <ul className={style1.lists}>
          <li className={style1.nm}>
            <Icon type="file-add" className={style1.con} />
            收藏热门{}
          </li>
          {this.state.list.map((item, i) => {
            return (
              <li key={i} className={style1.nm}>
                {i + 1}
                <span className={style1.tol}>{item.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
