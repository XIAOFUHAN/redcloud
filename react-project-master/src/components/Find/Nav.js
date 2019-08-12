/*
 * @Description: 
 * @Author: 陈佳
 * @Date: 2019-08-07 19:57:02
 * @LastEditTime: 2019-08-07 20:36:00
 * @LastEditors: 陈佳
 */
import React, { Component } from 'react'
import Link from "umi/Link"
import zb from "./pic/zb.png"
import phb from "./pic/phb.png"
import gd from "./pic/gd.png"
import mrtj from "./pic/mrtj.png"
import dt from "./pic/dt.png"
const divstyle={
    display:"flex",
    width:"100%",
    padding:"0.3rem 0",
    justifyContent: "space-around",
    borderBottom:"1px solid #ccc"
}
export default class Nav extends Component {
    render() {
        return (
            <div style={divstyle}>
                <Link to="/login">
                    <img src={mrtj} alt=""  style={{width:"1.5rem"}}/>
                </Link>
                <Link to="/login">
                    <img src={gd} alt="" style={{width:"1.5rem"}}/>
                </Link>
                <Link to="/login">
                    <img src={phb} alt="" style={{width:"1.5rem"}}/>
                </Link>

                <Link to="/login">
                    <img src={dt} alt="" style={{width:"1.5rem"}}/>
                </Link>
                <Link to="/login">
                    <img src={zb} alt="" style={{width:"1.5rem"}}/>
                </Link>

            </div>
        )
    }
}
