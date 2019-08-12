import React, { Component } from "react";
import { Icon } from "antd";
import styles from "../popular/popular.module.css";
import { get } from "../../utils/request";





class popular extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
          List: [],
        };
      }
    
   componentDidMount(){
    get("/artist/list",{cat:1001,limit:15}).then(res=>{
        //console.log(res.data.artists)
        this.setState({List:res.data.artists})
      }).catch(error=>{
        console.log(error)
      })
   } 
    
   tap(id) {
    var id = id;
    //console.log(id);
    this.props.history.push({ pathname: "/singerdetail", query: { id: id } });
  }




    render() {
        return (
            <div>
                <div className={styles.top}>
                    <Icon type="left" className={styles.ico} onClick={this.returnback.bind(this)} / >
                    <span style={{display:"block",height:"1rem",lineHeight:"1rem",fontSize:"0.5rem"}}>热门</span>
                    <Icon type="bar-chart" className={styles.ico}/>
                </div>
                <ul className={styles.lie}>
                    {
                        this.state.List.map((item,i)=>{
                      return(<li key={i} className={styles.space} onClick={this.tap.bind(this,item.id)} ><img src={item.picUrl} className={styles.img1}/><div className={styles.sp}>{item.name}</div></li>)
                    })
                    }
                </ul>
            </div>
        );
    }

    returnback(){
        this.props.history.go(-1)
    }
}

export default popular;