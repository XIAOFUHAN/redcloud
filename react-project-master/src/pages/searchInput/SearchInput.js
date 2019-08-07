import React, { Component } from "react";
import {Icon} from "antd"
import style from "../searchInput/SearchInput.css";
import {get} from "../../utils/request";
import {instance} from "../../utils/request";

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1337347_z489if9nxlq.js',
});



class SearchInput extends Component {
 constructor(props){
   super(props)
  this.state={
    keywords:[]
  }
  }

 tap(){
    let keywords=this.refs.ipt.value;
    if(keywords.length>0){
      get(
        "/search",{keywords,limit:8}
      ).then(res=>{
        console.log(res.data.result.songs)
        this.setState({keywords:res.data.result.songs})
      })
    }else{
      this.setState({keywords:[]})
    }
 }

 tap2(id){
  var  id = id;
  console.log(id)
  this.props.history.push({ pathname:'/playlist',query:{id : id } })
 }
 
  render() {
    return (
      <div className={style.so}>
        <div className={style.top}>
            <input type="text"  ref="ipt" className={style.search} placeholder="搜索音乐、歌词、电台" onChange={this.tap.bind(this)}/>
            <span className={style.quxiao}>取消</span>
        </div>
        <ul className={style.his}>
        {
          this.state.keywords.map((item,i)=>{
            return(<li key={i} className={style.show} onClick={this.tap2.bind(this,item.id)}><Icon type="clock-circle" className={style.pic}/>{item.name}</li>)          
            })
        }
        </ul>
      </div>
    );
  }
}

export default SearchInput;
