import React, { useState, useEffect } from 'react';
import { Icon, Avatar, Button, Input, Tooltip } from 'antd';
import zkh from '../../pages/music/music.css';
import { dayMusicLists } from '../../services/auth';

function dayMusicList() {
  const [musicList, setMusicList] = useState([]); //音乐 列表
  useEffect(() => {
    dayMusicLists().then(res => {
      //console.log(res.data.result.song.artists);

      setMusicList(res.data.result);
    });
  }, []);
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
                <div className={zkh.musicCount}>
                  <div
                    className={zkh.musicName}
                    onClick={() => musicPlay(item.id)}
                  >
                    <p>{item.name}</p>
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
      </div>
    </div>
  );
}

export default dayMusicList;
