import React from 'react';
import { Icon, Avatar, Button, Input, Tooltip } from 'antd';
function phoneLogin() {
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
        <span style={{ fontWeight: '800', fontSize: '26px' }}>手机号登录</span>
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
          onChange={() => null}
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
          onChange={() => null}
        />
        <Button type="primary" block={true} style={{ margin: '0.3rem 0' }}>
          登陆
        </Button>
      </div>
      <div style={{ textAlign: 'center' }}>重设密码?</div>
    </div>
  );
}

export default phoneLogin;
