/*
 * @Description: 
 * @Author: 陈佳
 * @Date: 2019-08-09 10:52:55
 * @LastEditTime: 2019-08-10 09:17:34
 * @LastEditors: 陈佳
 */
import React, { Component } from 'react'
import { get } from "../../utils/request"
import Link from "umi/Link"
// import Styles from "./Reclist.module.css"
// import { Table, Divider, Tag } from 'antd';
import { Icon, Row, Col } from 'antd';
const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1337347_z489if9nxlq.js',
});


export default class DJcategory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }
    componentDidMount() {
        get("/dj/catelist").then(data => {
            console.log(data.data.categories)
            this.setState({
                list: data.data.categories
            })
        }).catch(err => {
            console.log(err)
        })
    }
    render() {
        return (
            <div >
                <p>电台分类></p>
                <div >

                    <Row >
                        {
                            this.state.list.map((item,i) => {
                               
                                return (

                                    <Col span={12} key={item.id} style={{background:"rgb(240, 240, 240)", textAlign: "left", padding: "0.1rem",paddingLeft:"1rem"}} >
                                       <Link to="/login"> <img src={item.pic56x56Url} alt="" style={{width:"0.6rem"}} /> <span style={{color: "#554433" }}>{item.name}</span>
                                        {/* <img src={item.picPCBlackUrl} alt=""/> */}</Link>
                                    </Col>
                                )
                            })
                        }

                        {/* <Col span={12} style={{background:"green",textAlign:"left"}} >asd</Col> */}
                    </Row>

                    {/* {
                        this.state.list.map(item => {
                            if (item) {
                                return (
                                    <div className={Styles.sig} key={item.id} style={{width:"3.4rem"}}>
                                        <Link to="login">
                                        <img src={item.picUrl} alt="" className={Styles.sigimg} style={{width:"3.4rem"}}/>
                                        </Link>
                                        <h5 className={Styles.sigp} style={{width:"3.4rem"}}>
                                        
                                        <p>{item.copywriter}</p>
                                        <p>{item.artistName}</p></h5>
                                    </div>
                                )
                            } else {
                                return <h2>这个接口不稳</h2>
                            }

                        })
                    }  */}

                </div>
            </div>
        )
    }
}
