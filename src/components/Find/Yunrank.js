/*
 * @Description: 
 * @Author: 陈佳
 * @Date: 2019-08-08 16:10:11
 * @LastEditTime: 2019-08-09 20:05:07
 * @LastEditors: 陈佳
 */
import React, { Component } from 'react'
import { get } from "../../utils/request"
import Link from "umi/Link"
import { Icon } from 'antd';
const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1337347_z489if9nxlq.js',
});
export default class Yunrank extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: {},
            tracks: []
        }
    }
    componentWillMount() {
        // /toplist/artist
        get('/toplist/detail').then(data => {
            this.setState({
                list: data.data.list[this.props.idx],
                tracks: data.data.list[this.props.idx].tracks
            })

        }).catch(err => {
            console.log(err)
        })
    }
    render() {
        return (
            <div style={{padding: "0.1rem 0.2rem"}}>
                <Link to="/login">
                    <img src={this.state.list.coverImgUrl} alt="" style={{ float: "left", height: "1.5rem", width: "1.5rem" }} />
                    <div style={{padding: "0.15rem",marginLeft:"1.6rem" }}>
                        {
                            this.state.tracks.map((item, i) => {
                                return (
                                    <p style={{ height: "0.4rem", lineHeight: "0.4rem" ,color: "#554433",overflow:"hidden"}} key={i}>{(i+1)+"."+item.first+"--"+item.second}</p>
                                )
                            })
                        }
                    </div>
                </Link>
            </div>
        )
    }
}
