/*
 * @Description: 
 * @Author: 陈佳
 * @Date: 2019-08-07 19:10:33
 * @LastEditTime: 2019-08-07 20:58:03
 * @LastEditors: 陈佳
 */
import React, { Component } from 'react'
import { Carousel } from 'antd';
import { get } from "../../utils/request"
export default class Banner extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bannerlist: []
        }
    }
    componentDidMount() {
        get("banner", { type: 1 }).then(data => {
            //  console.log(data.data.banners);   
            this.setState({
                bannerlist: data.data.banners//.map((item) => item.pic)
            })
        })
    }
    render() {
        return (
            <div style={{marginTop:"0.2rem"}}>
                <Carousel autoplay>
                    {this.state.bannerlist.map((item,i)=>{
                        return (
                            <div key={item.bannerId}>
                                <img src={item.pic} alt="" style={{width:"96%",margin:"0 2%"}} />
                            </div>
                        )
                    })}
                </Carousel>
            </div>
        )
    }
}
