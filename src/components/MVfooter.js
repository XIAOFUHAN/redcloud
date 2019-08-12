import React, { Component } from 'react'
import { Input, Select, Icon } from 'antd';
import Style from '../css/recommendation.css'
const { Search } = Input;


export default class MVfooter extends Component {
    render() {
        return (
        <div className={Style.MVfooter} >
           
            <Input 
             style={{height:"0.8rem",backgroundColor:"#ccc",width:"90%",marginTop:"0.05rem"}}
             addonAfter={<Icon type="edit" />} 
            
             defaultValue="评论"
              />
    
        </div>

        )
    }
}
