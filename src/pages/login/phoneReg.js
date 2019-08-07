import React, { useState } from 'react';
import { Icon, Avatar, Button, Input, Tooltip } from 'antd';
import router from 'umi/router';
function phoneReg() {
  const [phone, setPhone] = useState('');
  const [pwd, setPwd] = useState('');
  const regHandle = () => {
    if (!/^1[3456789]\d{9}$/.test(phone)) {
      alert('手机号码有误，请重填');
      return false;
    }
    if (phone && pwd) {
      router.push('/login/phoneverify');
    } else {
      alert('请输入手机号和密码');
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
        <span style={{ fontWeight: '800', fontSize: '26px' }}>手机号注册</span>
      </div>
      {/* 输入框 */}
      <div style={{ padding: '0 0.3rem' }}>
        <Input
          placeholder="请输入手机号"
          prefix={<Icon type="tablet" style={{ color: 'rgba(0,0,0,.25)' }} />}
          suffix={
            <Tooltip title="请输入手机号">
              <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
            </Tooltip>
          }
          onChange={e => setPhone(e.target.value)}
          style={{ margin: '0.3rem 0' }}
        />
        <Input.Password
          placeholder="请输入密码"
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          suffix={
            <Tooltip title="Extra information">
              <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
            </Tooltip>
          }
          onChange={e => setPwd(e.target.value)}
        />
        <Button
          type="primary"
          block={true}
          style={{ margin: '0.3rem 0' }}
          onClick={() => regHandle()}
        >
          下一步
        </Button>
      </div>
      <div style={{ textAlign: 'center', margin: '2rem 0 0.2rem 0' }}>
        其他登录方式?
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Avatar size={32} icon="user" shape={'circle'} />
          <span>qq</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Avatar size={32} icon="user" shape={'circle'} />
          <span>qq</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Avatar size={32} icon="user" shape={'circle'} />
          <span>qq</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Avatar size={32} icon="user" shape={'circle'} />
          <span>qq</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Avatar size={32} icon="user" shape={'circle'} />
          <span>qq</span>
        </div>
      </div>
    </div>
  );
}

export default phoneReg;
