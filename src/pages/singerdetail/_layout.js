import React, { Component } from "react";
import { Icon } from "antd";
import style from "../singerdetail/singerdetail.module.css";
import { get } from "../../utils/request";
import router from 'umi/router';
import NavLink from "umi/NavLink";


const headericonstyle = {
  color: "#D2413B",
  fontSize: "0.5rem",
  margin: "0 0.1rem"
};
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1337347_z489if9nxlq.js"
});



class singerdetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singerList: {},
      singer: "",
      
    };
  }

  componentDidMount() {
    var id = this.props.location.query.id;
    localStorage.setItem("user_id",id);
     window.addEventListener('scroll', this.handleScroll.bind(this));	
    get("/artists", { id: id }).then(res => {
      //console.log(res.data.artist);
      this.setState({
        singerList: res.data.artist,
        singer: res.data.artist.name
      });
    }).catch(error=>{
      console.log(error)
    });
  }
  
 
  handleScroll(){
    var xxx = this.refs.xx;
    if(xxx) {
      if(window.scrollY>270){
        xxx.style.position="fixed";
        xxx.style.top="43px";
      }else{
        xxx.style.position="static";
      }
    }
    
  }

  componentWillUnmount() {
    //移除监听
    window.removeEventListener('scroll',  this.handleScroll)
}

  returnback() {
    //this.props.history.go(-1);
   // router.goBack(-1);
     this.props.history.push({ pathname: "/popular/popular" });
  }


  render() {
    return (
      <div className={style.detail}>
        <div className={style.top}>
          <Icon
            type="left"
            className={style.ico}
            onClick={this.returnback.bind(this)}
          />
          <span
            style={{
              display: "block",
              height: "1rem",
              lineHeight: "1rem",
              fontSize: "0.5rem"
            }}
          >
            {this.state.singer}
          </span>
          <Icon type="bar-chart" className={style.ico} />
        </div>
       
        <div className={style.sing}>
          <img src={this.state.singerList.picUrl}  />
          <div className={style.pu} ref='xx'>
              <NavLink exact to={{ pathname: '/singerdetail/'}} className={style.pro} >热门{this.state.singerList.musicSize}</NavLink>
              <NavLink to={{ pathname: '/singerdetail/album' }} className={style.pro}>专辑{this.state.singerList.albumSize}</NavLink>
              <NavLink to={{ pathname: '/singerdetail/mv' }} className={style.pro}>MV{this.state.singerList.mvSize}</NavLink>
              <NavLink to={{ pathname: '/singerdetail/info' }} className={style.pro}>歌手信息</NavLink>
              
          </div>
          <div className={style.sec}>
            {this.props.children}
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
    )
  }

  

}

export default singerdetail;
