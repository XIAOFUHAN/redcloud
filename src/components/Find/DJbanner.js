/*
 * @Description: 
 * @Author: 陈佳
 * @Date: 2019-08-07 19:10:33
 * @LastEditTime: 2019-08-09 10:03:02
 * @LastEditors: 陈佳
 */
import React, { Component } from 'react'
import { Carousel } from 'antd';
import { get } from "../../utils/request"
export default class DJanner extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bannerlist: []
        }
    }
    componentDidMount() {
        get("/personalized/djprogram").then(data => {
            // console.log(data.data);   
            this.setState({
                bannerlist: data.data.result//.map((item) => item.pic)
            })
        })
    }
    render() {
        return (
            <div style={{marginTop:"0.2rem"}}>
                <Carousel autoplay>
                    {this.state.bannerlist.map((item,i)=>{
                        return (
                            <div key={item.id}>
                                <img src={item.picUrl} alt="" style={{width:"96%",height:"4rem",margin:"0 2%"}} />
                            </div>
                        )
                    })}
                </Carousel>
            </div>
        )
    }
}
