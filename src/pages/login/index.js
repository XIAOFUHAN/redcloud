import React, { useState } from 'react';
import { Icon, Avatar, Button } from 'antd';
import router from 'umi/router';
import zkh from './login.css';
function index() {
  return (
    <div>
      {/*导航*/}
      <div className={zkh.nav}>
        <span onClick={() => history.back()}>
          <Icon type="close" />
        </span>
        <h1>登录</h1>
      </div>
      {/*头像 */}
      <div className={zkh.avatar}>
        <Avatar size={64} icon="user" shape={'circle'} />
      </div>
      {/*输入框 */}
      <div className={zkh.inputBox}>
        <Button
          type="primary"
          block={true}
          onClick={() => {
            router.push('/login/phonelogin');
          }}
        >
          手机号登录
        </Button>

        <Button
          className={zkh.buttonReg}
          type="primary"
          block={true}
          onClick={() => {
            router.push('/login/phonereg');
          }}
        >
          注册
        </Button>
      </div>
      <div className={zkh.elseLogin}>其他方式登录</div>

      <div className={zkh.elseLogins}>
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

export default index;
