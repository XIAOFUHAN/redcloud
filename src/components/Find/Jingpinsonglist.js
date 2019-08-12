/*
 * @Description: 独家放送
 * @Author: 陈佳
 * @Date: 2019-08-08 10:13:15
 * @LastEditTime: 2019-08-08 19:41:30
 * @LastEditors: 陈佳
 */
import React, { Component } from 'react'
import { get } from "../../utils/request"
import Link from "umi/Link"
import Styles from "./Reclist.module.css"
import { Icon } from 'antd';
const coverspan={
    display:"block",
    position:"absolute",
    left:"0.1rem",
    bottom:"1.1rem",
    color:"#fff"
}
export default class Jingpinsonglist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
       
        }
    }
    componentDidMount() {
        get("/top/playlist/highquality").then(data => {
            this.setState({
                
                list: data.data.playlists
                
            })
            // console.log(data.data.playlists)
        }).catch(err => {
            console.log(err)
        })
        
    }
    render() {
        return (
            <div>
                <h2>全部歌单></h2>
                <div className={Styles.tjbox}>
                
                    {
                        this.state.list.map(item => {
                            let count = Math.ceil(item.playCount / 10000)
                            if (item) {
                                return (
                                    <div className={Styles.sig} key={item.id} style={{width:"3rem",height:"4rem"}}>
                                          <Link to="/login">
                                        <img src={item.coverImgUrl} alt="" className={Styles.sigimg}  style={{width:"3rem",height:"3rem"}}/></Link>
                                        <span className={Styles.sigspan}>
                                            <Icon type="customer-service" />{count}万</span>
                                            <span style={coverspan}>{item.copywriter}</span>
                                        <h5 className={Styles.sigp} style={{marginTop:"0.1rem"}}>{item.name}</h5>
                                    </div>
                                )
                            } else {
                                return <h2>这个接口不稳</h2>
                            }

                        })
                    }

                </div>
            </div>
        )
    }
}
