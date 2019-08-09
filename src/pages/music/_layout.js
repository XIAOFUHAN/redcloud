import React, { useState, useEffect } from 'react';
import Footer from '../../components/fotter/footer';
import { Icon, Avatar, Button, Input, Tooltip } from 'antd';
import zkh from './music.css';
import { newMusics, playMusic } from '../../services/auth';
import MusicList from '../../components/music/musicList';

function _layout(props) {
  const [color, setColor] = useState(true); //标签颜色
  const [menuNum, setMenuNum] = useState(1); //tag 标签默认第一个
  const [musicList, setMusicList] = useState([]); //音乐 列表
  const [isDisplay, setIsDisplay] = useState(true); //模块显示 默认显示推荐
  const [type, setType] = useState(0);

  const tab = {
    display: isDisplay ? 'block' : 'none'
  };
  const colorChange = () => {
    setColor(!color);
  };
  const bottomChange = (num, type) => {
    setMenuNum(num);
    setType(type);
  };
  // const musicPlay = id => {
  //   playMusic({
  //     id: id
  //   }).then(res => {
  //     console.log(res.data.data);
  //     setMusicSrc(res.data.data[0].url);
  //     console.log(musicSrc);
  //   });
  // };

  return (
    <div>
      <div
        className={zkh.nav}
        style={{ width: '100%', position: 'fixed', top: '0' }}
      >
        <Icon type="left" onClick={() => history.back()} />
        <div className={zkh.tag}>
          <span
            className={color ? 'activeColor' : 'activeColor1'}
            onClick={() => colorChange()}
          >
            新歌
          </span>
          <span
            className={color ? 'activeColor1' : 'activeColor'}
            onClick={() => colorChange()}
          >
            新碟
          </span>
        </div>
        <Icon type="bar-chart" onClick={() => null} />
      </div>
      <div className={zkh.tags} style={{ marginTop: '0.5rem' }}>
        <span
          className={menuNum === 1 ? 'activeBottom' : 'activeBottom1'}
          onClick={() => bottomChange(1, 0)}
        >
          推荐
        </span>
        <span
          className={menuNum === 2 ? 'activeBottom' : 'activeBottom1'}
          onClick={() => bottomChange(2, 7)}
        >
          华语
        </span>
        <span
          className={menuNum === 3 ? 'activeBottom' : 'activeBottom1'}
          onClick={() => bottomChange(3, 96)}
        >
          欧美
        </span>
        <span
          className={menuNum === 4 ? 'activeBottom' : 'activeBottom1'}
          onClick={() => bottomChange(4, 8)}
        >
          日本
        </span>
        <span
          className={menuNum === 5 ? 'activeBottom' : 'activeBottom1'}
          onClick={() => bottomChange(5, 16)}
        >
          韩国
        </span>
      </div>
      <MusicList s={type} />
      <Footer />
    </div>
  );
}

export default _layout;
