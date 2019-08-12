import React, { useState, useEffect } from 'react';
import router from 'umi/router';
import { Icon, Avatar, Button, Input, Tooltip } from 'antd';
import { login } from '../../services/auth';
import { setToken } from '../../utils/tools';
import zkh from './login.css';
function phoneLogin() {
  const [phone, setPhone] = useState('');
  const [pwd, setPwd] = useState('');
  useEffect(() => {}, []);
  const loginHandle = () => {
    console.log(phone);
    console.log(pwd);
    if (!/^1[3456789]\d{9}$/.test(phone)) {
      alert('手机号码有误，请重填');
      return false;
    }
    if (phone && pwd) {
      login({
        phone: phone,
        password: pwd
      })
        .then(res => {
          console.log(res.data.account.id);
          if (res.data.code === 200) {
            alert('登录成功');
            router.push('/');
            setToken(res.data.account.id);
          }
        })
        .catch(error => {
          alert('账号密码错误');
        });
    } else {
      alert('请输入手机号和密码');
    }
  };
  return (
    <div>
      {/*导航*/}
      <div className={zkh.nav}>
        <span onClick={() => history.back()}>
          <Icon type="left" />
        </span>
        <h1>手机号登录</h1>
      </div>
      {/* 输入框 */}
      <div style={{ padding: '0 0.6rem' }}>
        <Input
          placeholder="请输入手机号"
          prefix={<Icon type="tablet" style={{ color: 'rgba(0,0,0,.25)' }} />}
          suffix={
            <Tooltip title="请输入手机号">
              <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
            </Tooltip>
          }
          onChange={e => setPhone(e.target.value)}
          style={{ margin: '0.6rem 0' }}
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
          style={{ margin: '0.6rem 0' }}
          onClick={() => loginHandle()}
        >
          登陆
        </Button>
      </div>
      <div style={{ textAlign: 'center' }}>重设密码?</div>
    </div>
  );
}

export default phoneLogin;
