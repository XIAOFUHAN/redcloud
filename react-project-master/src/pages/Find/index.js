/*
 * @Description: 
 * @Author: 陈佳
 * @Date: 2019-08-06 16:45:09
 * @LastEditTime: 2019-08-09 16:43:07
 * @LastEditors: 陈佳
 */
import React, { Component } from 'react'
import Banner from "../../components/Find/Banner"
import Nav from "../../components/Find/Nav"
import Reclist from "../../components/Find/Reclist"
import Excbd from "../../components/Find/Excbd"
import Newsong from "../../components/Find/Newsong"
import Tuijianmv from "../../components/Find/Tuijianmv"
import Diantaituijian from "../../components/Find/Diantaituijian"
import Jingxuanzhuanlan from "../../components/Find/Jingxuanzhuanlan"
export default class Recommendation extends Component {
    render() {
        return (
            <div >
                <Banner />
                <Nav/>
                <Reclist />
                <Excbd/>
                <Newsong/>
                <Tuijianmv/>
                <Diantaituijian/>
                <Jingxuanzhuanlan/>
            </div>
        )
    }
}
