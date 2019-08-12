import React, { Component } from "react";
import { Icon } from "antd";
import style from "../singerClass/singerClass.module.css";
import { get } from "../../utils/request";



class singerClass extends Component {
   
    render() {
        return (
            <div>
                <div className={style.top}>
                    <Icon type="left" className={style.ico} onClick={this.returnback.bind(this)} />
                    <span style={{display:"block",height:"1rem",lineHeight:"1rem",fontSize:"0.5rem"}}>歌手分类</span>
                    <Icon type="bar-chart" className={style.ico}/>
                </div>
                <div  className={style.lie}>
                    <ul>
                        <li className={style.sin} onClick={this.popular.bind(this)}>华语男歌手(可点)<Icon type="right" / ></li>
                        <li className={style.sin}>华语女歌手<Icon type="right" / ></li>
                        <li className={style.sin}>华语乐队/组合<Icon type="right" / ></li>
                    </ul>
                    <ul  className={style.space}>
                        <li className={style.sin}>欧美男歌手<Icon type="right" / ></li>
                        <li className={style.sin}>欧美女歌手<Icon type="right" / ></li>
                        <li className={style.sin}>欧美乐队/组合<Icon type="right" / ></li>
                    </ul>
                    <ul className={style.space}>
                        <li className={style.sin}>日本男歌手<Icon type="right" / ></li>
                        <li className={style.sin}>日本女歌手<Icon type="right" / ></li>
                        <li className={style.sin}>日本乐队/组合<Icon type="right" / ></li>
                    </ul>
                    <ul>
                        <li className={style.sin}>其他男歌手<Icon type="right" / ></li>
                        <li className={style.sin}>其他女歌手<Icon type="right" / ></li>
                        <li className={style.sin}>其他乐队/组合<Icon type="right" / ></li>
                    </ul>
                </div>
            </div>
        );
    }


    returnback(){
        this.props.history.go(-1)
    }

    popular(){
        this.props.history.push({ pathname: "/popular/popular" });
    }
    
}

export default singerClass;