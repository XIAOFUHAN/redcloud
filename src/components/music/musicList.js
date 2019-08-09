import React, { useState, useEffect } from 'react';
import { Icon, Avatar, Button, Input, Tooltip } from 'antd';
import zkh from '../../pages/music/music.css';
import { newMusics, playMusic, musicDetail } from '../../services/auth';

function musicList(props) {
  const [musicList, setMusicList] = useState([]); //音乐 列表
  const [musicSrc, setMusicSrc] = useState(''); //音乐 url
  const [musicPlayTime, setMusicPlayTime] = useState('');
  const musicPlay = id => {
    playMusic({
      id: id
    }).then(res => {
      setMusicSrc(res.data.data[0].url);
    });
  };

  const musicPlayAll = () => {
    let num = 0;
    let musicId = [];
    for (let i = 0; i < musicList.length; i++) {
      musicId.push(musicList[i].id);
    }

    console.log(musicId);
    //console.log(musicPlayTime);
    musicDetail({
      ids: musicId[num]
    }).then(res => {
      console.log(res.data.songs[0].dt);
      setMusicPlayTime(res.data.songs[0].dt);
    });
  };

  useEffect(
    () => {
      newMusics({ type: props.s }).then(res => {
        console.log(res.data.data);
        setMusicList(res.data.data);
      });
    },
    [props.s]
  );
  return (
    <div>
      <div>
        <div className={zkh.img}>
          <img
            src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3237319583,2940970288&fm=26&gp=0.jpg"
            alt=""
          />
        </div>
        <ul className={zkh.musicList}>
          <li className={zkh.firstLi} onClick={() => musicPlayAll()}>
            <Icon type="play-circle" className={zkh.play} />
            播放全部
          </li>
          {musicList.map((item, index) => {
            return (
              <li className={zkh.musicLi} key={index}>
                <span className={zkh.musicNum}>{index + 1}</span>
                <div className={zkh.musicCount}>
                  <div
                    className={zkh.musicName}
                    onClick={() => musicPlay(item.id)}
                  >
                    <p>{item.name}</p>
                    <p>{item.artists[0].name}</p>
                  </div>
                  <div className={zkh.playIcon}>
                    <Icon type="youtube" className={zkh.play} />
                    <Icon type="dash" />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <audio
          src={musicSrc}
          autoPlay="autoPlay "
          controls="controls"
          className={zkh.audio}
        />
      </div>
    </div>
  );
}

export default musicList;
