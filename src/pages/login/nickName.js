import React, { useState } from 'react';
import { Icon, Avatar, Button, Input, Tooltip } from 'antd';
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
      {/*导航*/}
      <div
        className="nav"
        style={{
          height: '0.5rem',
          borderBottom: '1px solid #ccc',
          position: 'relative',
          textAlign: 'center',
          lineHeight: '0.5rem'
        }}
      >
        <span
          onClick={() => history.back()}
          style={{ position: 'absolute', marginLeft: '-25%' }}
        >
          <Icon type="left" />
        </span>
        <span style={{ fontWeight: '800', fontSize: '26px' }}>手机号验证</span>
      </div>
      {/*头像 */}
      <div style={{ textAlign: 'center', marginTop: '0.3rem' }}>
        <Avatar size={64} icon="smile" shape={'circle'} />
      </div>
      <p style={{ textAlign: 'center', margin: '0.3rem 0', color: '#ccc' }}>
        你希望大家怎么称呼您?
      </p>
      {/*输入框 */}
      <div style={{ padding: '0 0.3rem' }}>
        <Input
          placeholder="请输入昵称"
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          onChange={e => setNickName(e.target.value)}
          style={{ margin: '0.2rem 0' }}
        />
        <Button
          type="primary"
          block={true}
          style={{ margin: '0.2rem 0' }}
          onClick={() => cloudMusic()}
        >
          开启云音乐
        </Button>
      </div>
    </div>
  );
}

export default nickName;
