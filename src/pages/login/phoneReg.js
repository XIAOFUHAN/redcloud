import React, { useState } from 'react';
import { Icon, Avatar, Button, Input, Tooltip } from 'antd';
import router from 'umi/router';
import zkh from './login.css';
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
      <div className="nav" className={zkh.nav}>
        <span onClick={() => history.back()}>
          <Icon type="left" />
        </span>
        <h1>手机号注册</h1>
      </div>
      {/* 输入框 */}
      <div className={zkh.inputBox}>
        <Input
          placeholder="请输入手机号"
          prefix={<Icon type="tablet" style={{ color: 'rgba(0,0,0,.25)' }} />}
          suffix={
            <Tooltip title="请输入手机号">
              <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
            </Tooltip>
          }
          onChange={e => setPhone(e.target.value)}
        />
        <Input.Password
          className={zkh.inputPwd}
          placeholder="请输入密码"
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          suffix={
            <Tooltip title="Extra information">
              <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
            </Tooltip>
          }
          onChange={e => setPwd(e.target.value)}
        />
        <Button type="primary" block={true} onClick={() => regHandle()}>
          下一步
        </Button>
      </div>
      <div className={zkh.elseLoginBig}>其他登录方式?</div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div className={zkh.loginElse}>
          <Avatar size={32} icon="user" shape={'circle'} />
          <span>qq</span>
        </div>
        <div className={zkh.loginElse}>
          <Avatar size={32} icon="user" shape={'circle'} />
          <span>qq</span>
        </div>
        <div className={zkh.loginElse}>
          <Avatar size={32} icon="user" shape={'circle'} />
          <span>qq</span>
        </div>
        <div className={zkh.loginElse}>
          <Avatar size={32} icon="user" shape={'circle'} />
          <span>qq</span>
        </div>
        <div className={zkh.loginElse}>
          <Avatar size={32} icon="user" shape={'circle'} />
          <span>qq</span>
        </div>
      </div>
    </div>
  );
}

export default phoneReg;
