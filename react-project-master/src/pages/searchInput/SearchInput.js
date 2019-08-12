import React, { Component } from "react";
import { Icon } from "antd";
import style from "../searchInput/SearchInput.module.css";
import { get } from "../../utils/request";


const headericonstyle = { color: "#D2413B", fontSize: "0.5rem" ,margin:"0 0.1rem"}
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1337347_z489if9nxlq.js"
});

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keywords: [],
      hot:[]
    };
  }

  tap() {
    let keywords = this.refs.ipt.value;
    if (keywords.length > 0) {
      get("/search", { keywords, limit: 10 }).then(res => {
        console.log(res.data.result.songs);
        this.setState({ keywords: res.data.result.songs });
      });
    } else {
      this.setState({ keywords: [] });
    }
  }

  tap2(id) {
    var id = id;
    console.log(id);
    this.props.history.push({ pathname: "/playlist", query: { id: id } });
  }

  tosinger(){
    this.props.history.push({ pathname: "/singerClass/singerClass" });
  }
  componentDidMount(){
    get("/search/hot").then(res=>{
      console.log(res.data.result.hots)
      this.setState({ hot: res.data.result.hots });
    }).catch(error=>{
      console.log(error)
    })
  }

  cancel(){
     this.refs.ipt.value="";
     this.setState({ keywords: [] });
  }

  render() {
    return (
      <div className={style.so}>

        <div className={style.top}>
          <input
            type="text"
            ref="ipt"
            className={style.search}
            placeholder="搜索音乐、歌词、电台"
            onChange={this.tap.bind(this)}
          />
          <span className={style.quxiao} onClick={this.cancel.bind(this)}>取消</span>
          <ul className={style.his}>
            {this.state.keywords.map((item, i) => {
              return (
                <li
                  key={i}
                  className={style.show}
                  onClick={this.tap2.bind(this, item.id)}>
                     <Icon type="clock-circle" className={style.pic} />
                     {item.name}
                </li>
              );
            })}
          </ul> 
        </div>

        <div className={style.section}>
            <p className={style.singer} onClick={this.tosinger.bind(this)}>歌手分类》</p>
            <div className={style.hotsearch}>
                <p style={{marginTop:"0.2rem"}}>热门搜索</p>
                <div className={style.hots}>
                  {
                    this.state.hot.map((item,i)=>{
                      return(<span key={i} className={style.list}>{item.first}</span>)
                    })
                  }
                </div>
            </div>
        </div> 
        

        <div className={style.footer}>
          <div className={style.footerico}>
            <IconFont type="icon-music" style={headericonstyle} />
            <p>发现音乐</p>
          </div>
          <div className={style.footerico}>
            <IconFont type="icon-music3yinle" style={headericonstyle} />
            <p>我的音乐</p>
          </div>
          <div className={style.footerico}>
            <Icon type="team" style={headericonstyle} />
            <p>朋友</p>
          </div>
          <div className={style.footerico}>
            <Icon type="user" style={headericonstyle} />
            <p>账号</p>
          </div>
        </div>

      </div>
    );
  }
}

export default SearchInput;
