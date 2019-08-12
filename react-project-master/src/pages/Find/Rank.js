/*
 * @Description: 排行榜
 * @Author: 陈佳
 * @Date: 2019-08-06 16:59:19
 * @LastEditTime: 2019-08-09 20:41:18
 * @LastEditors: 陈佳
 */
import React, { Component } from 'react'
import { get } from "../../utils/request"
import Yunrank from "../../components/Find/Yunrank"
import Grank from "../../components/Find/Grank"
export default class Rank extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }
    componentDidMount() {
       
      
        get('/toplist/detail').then(data => {
            console.log(data.data.list.splice(0,12))
            this.setState({
            list: data.data.list.splice(0,12)
            })
        }).catch(err => {
            console.log(err)
        })
    }
    render() {
        return (
            <div>

                <div>
                    <p>&nbsp;云音乐官方榜</p>
                    <Yunrank idx="0" />
                    <Yunrank idx="1" />
                    <Yunrank idx="2" />
                    <Yunrank idx="3" />
                </div>
               <Grank/>


            </div>
        )
    }
}
