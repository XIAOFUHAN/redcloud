import React, { Component } from "react";
import { get } from "../../utils/request";
import styles from "./info.css";
export default class info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      simliar:{}
    };
  }

  componentDidMount() {
    var id = this.props.location.query.id;
    if (id ) {
      localStorage.setItem("user_id", id);
    } else {
      id = localStorage.getItem("user_id");
    }
    get("/artist/desc", { id: id}).then(res => {
      console.log(res.data);
     this.setState({ list:res.data });
    }).catch(error=>{
      console.log(error)
    });
    
  }

// componentWillMount(){
//     var id = this.props.location.query.id;

//     if (id ) {
//       localStorage.setItem("user_id", id);
//     } else {
//       id = localStorage.getItem("user_id");
//     }
//     //console.log(id)
//     get("/simi/artist", { id: id}).then(res => {
//         console.log(id) 
//         console.log(res.data);
//       // this.setState({ simliar:res.data });
//       });
// } //该函数返回状态码为301 代表永久性转移



  render() {
    return (
      <div>
        <div style={{padding:"0.2rem"}}>
            <h1 style={{height:"0.6rem",lineHeight:"0.8rem",fontSize:"0.4rem"}}>个人简介</h1>
            <p  className={styles.more} >{this.state.list.briefDesc}</p>
        </div>
      </div>
    );
  }
}
