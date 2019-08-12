/*
 * @Description: 
 * @Author: 陈佳
 * @Date: 2019-08-06 16:58:43
 * @LastEditTime: 2019-08-12 11:37:49
 * @LastEditors: 陈佳
 */
import React, { Component } from 'react'
import { get } from "../../utils/request"
import DJbanner from "../../components/Find/DJbanner"
import DJ from "../../components/Find/DJ"
import DJhjm from "../../components/Find/DJhjm"
import DJcategory from "../../components/Find/DJcategory"
import Link from "umi/Link"
import { Icon } from 'antd';
import {draw} from '../../utils/canvas'
const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1337347_z489if9nxlq.js',
});
const toplistyle = {
    height: "0.6rem", lineHeight: "0.6rem", float: "left", textAlign: "center",width:"50%",
}
const topulstyle={fontSize:"0.4rem",width: "100%-0.2rem",height:"1rem" ,padding:"0.2rem 0.1rem"}
export default class Hoststation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // list: [],
            // category: [],
            url:""
        }
    }
   componentDidMount() {
       console.log(this.refs.asd)
    if (this.canvas) {
      
    //     get("/dj/category/recommend").then(data => {
        get("/video/url",{
            id:"89ADDE33C0AAE8EC14B99F6750DB954D"
        }).then(data => {
        
             console.log(data.data.urls[0].url)
             this.setState({
                 url:data.data.urls[0].url
             })
             draw(this.canvas,data.data.urls[0].url)
             console.log("ssssssssssss")
    //         this.setState({
    //             list: data.data.data,
    //             category: data.data.data.map((item, i) => {
    //                 return {
    //                     id: i,
    //                     idcategoryName: item.categoryName,
    //                     categoryId: item.categoryId
    //                 }
    //             })
    //         })
        }).catch(err => {
            console.log(err)
        }) 
    }
    }
    render() {
       
        return (
            <div>
                {/* <canvas width="720" height="360" ref={node => this.canvas = node} style={{width: '100%',height: 'auto'}}></canvas> */}
                 {/* <canvas  ref="asd" style={{width: '100%',height: 'auto'}}></canvas>  */}
                 {/* <video src={this.state.url}></video> */}
                <DJbanner />
                <ul style={topulstyle} >
                    <li style={toplistyle} key="1">
                        <a href="#category" >
                        <Icon type="qrcode" style={{ fontSize:"0.6rem", color: "#D2413B",}} />
                        <span style={{color:"rgba(0,0,0,0.65)"}}>&nbsp;电台分类</span></a> </li>
                    <li style={toplistyle} key="2" >
                        <Icon type="unordered-list" style={{fontSize:"0.6rem", color: "#D2413B",}} />
                        <span>&nbsp;电台排行</span>
                    </li>
                </ul>
                <DJhjm/>
                <DJ type="10002" typename="3D|电子" />
                <DJ type="3001" typename="二次元" />
                <DJ type="2001" typename="创作翻唱" />
                <DJ type="5" typename="脱口秀" />
                <DJ type="3" typename="情感调频" />
                <DJ type="2" typename="音乐故事" />
                <div id="category">
                <DJcategory  />
                </div>
            </div>
        )
    }
}
