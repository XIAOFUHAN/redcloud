/*
 * @Description: 独家放送
 * @Author: 陈佳
 * @Date: 2019-08-08 10:13:15
 * @LastEditTime: 2019-08-08 17:31:05
 * @LastEditors: 陈佳
 */
import React, { Component } from 'react'
import { get } from "../../utils/request"
import Link from "umi/Link"
import Styles from "./Excbd.module.css"
import { Icon } from 'antd';
export default class Excbd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            excbdlist: [],
            bigimg: {}
        }
    }
    componentDidMount() {
        get("/personalized/privatecontent").then(data => {
            this.setState({
                bigimg: data.data.result[2],
                excbdlist: data.data.result.splice(0, 2)
                
            })
            //console.log(this.state.excbdlist, this.state.bigimg)
        }).catch(err => {
            console.log(err)
        })
        
    }
    render() {
        return (
            <div>
                <p>独家放送></p>
                <div className={Styles.excbox}>
                    {
                        this.state.excbdlist.map(item => {
                            return (<div key={item.id} className={Styles.simgbox}>
                                <Link to="login">
                                <img src={item.picUrl} className={Styles.sigimg} />
                                </Link>
                                <h5>{item.name}</h5>
                            </div>
                            )
                        })
                    }
                </div>
                <div>
                        <img src={this.state.bigimg.picUrl} className={Styles.sigbigimg} alt="" />
                        <h5 style={{padding:"0 0.3rem"}}>{this.state.bigimg.name}</h5>
                    </div> 
            </div>
        )
    }
}
