import React, { useState } from 'react';
import { Icon, Avatar, Button, Input, Tooltip } from 'antd';
import zkh from './login.css';

function nickName() {
  const [nickName, setNickName] = useState('');
  const cloudMusic = () => {
    if (nickName === '') {
      alert('请输入昵称');
    } else {
    }
  };
  return (
    <div>
      {' '}
      {/*导航*/}
      <div className={zkh.nav}>
        <span onClick={() => history.back()}>
          <Icon type="left" />
        </span>
        <h1> 手机号验证 </h1>
      </div>
      {/*头像 */}
      <div className={zkh.avatar}>
        <Avatar size={64} icon="smile" shape={'circle'} />
      </div>
      <p className={zkh.nick}> 你希望大家怎么称呼您 ? </p> {/*输入框 */}{' '}
      <div style={{ padding: '0 0.3rem' }}>
        <Input
          placeholder="请输入昵称"
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          onChange={e => setNickName(e.target.value)}
        />
        <Button
          className={zkh.codeButton}
          type="primary"
          block={true}
          onClick={() => cloudMusic()}
        >
          开启云音乐
        </Button>
      </div>
    </div>
  );
}

export default nickName;
