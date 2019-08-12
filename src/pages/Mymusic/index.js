/*
 * @Description: 
 * @Author: 陈佳
 * @Date: 2019-08-09 21:59:42
 * @LastEditTime: 2019-08-10 10:05:01
 * @LastEditors: 陈佳
 */
import React, { Component } from 'react'
import Subcount from  "../../components/Mymusic/Subcount"
import Playlist from  "../../components/Mymusic/Playlist"
export default class index extends Component {
    render() {
        return(
            <div>
             <Subcount/>
             <Playlist/>
            </div>
        )
    }
}
