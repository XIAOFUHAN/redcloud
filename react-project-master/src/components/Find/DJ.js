/*
 * @Description: 
 * @Author: 陈佳
 * @Date: 2019-08-07 20:39:19
 * @LastEditTime: 2019-08-09 10:50:11
 * @LastEditors: 陈佳
 */
import React, { Component } from 'react'
import { get } from "../../utils/request"
import Link from "umi/Link"
import Styles from "./Reclist.module.css"
import { Icon } from 'antd';
const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1337347_z489if9nxlq.js',
});


export default class DJ extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list:[],
            typename:this.props.typename
        }
    }
    componentDidMount(){
        get("/dj/recommend/type",{type:this.props.type}).then(data => {
        // console.log(data.data.djRadios)
            this.setState({
                list: data.data.djRadios.splice(0,3)
            })
        }).catch(err => {
            console.log(err)
        })
    }
    render() {
        
        console.log(this.state.list)
        return (
            <div>
                <p>{this.state.typename}></p>
                <div className={Styles.tjbox} style={{ height: "3.4rem" }}>
                    {
                        this.state.list.map(item => {
                            return (
                                <div className={Styles.sig} key={item.id}>
                                    <Link to="/login">
                                        <img src={item.picUrl} alt="" className={Styles.sigimg} />
                                    </Link>
                                    <h5 className={Styles.sigp}>{item.rcmdtext}</h5>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

}
