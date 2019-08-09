import React, { useState, useEffect } from 'react';
import Footer from '../../components/fotter/footer';
import { Icon, Avatar, Button, Input, Tooltip } from 'antd';
import zkh from './music.css';
import DayMusicList from '../../components/music/dayMusicList';

function dayMusic(props) {
  return (
    <div>
      <div
        className={zkh.nav}
        style={{ width: '100%', position: 'fixed', top: '0' }}
      >
        <Icon type="left" onClick={() => history.back()} />
        <div>
          <span style={{ border: 'none' }}>每日歌曲推荐</span>
        </div>
        <div>
          <Icon type="question-circle" onClick={() => null} style={{margin:'0 0.2rem'}}/>
          <Icon type="bar-chart" onClick={() => null} />
        </div>
      </div>
      <DayMusicList />
      <Footer />
    </div>
  );
}

export default dayMusic;
