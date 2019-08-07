import React from 'react';
import { Icon, Avatar, Button } from 'antd';
function index() {
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
          style={{ position: 'absolute', marginLeft: '-30%' }}
        >
          <Icon type="close" />
        </span>
        <span style={{ fontWeight: '800', fontSize: '26px' }}>登录</span>
      </div>
      {/*头像 */}
      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <Avatar size={64} icon="user" shape={'circle'} />
      </div>
      {/*输入框 */}
      <div style={{ padding: '0 0.3rem', marginTop: '0.5rem' }}>
        <Button type="primary" block={true}>
          手机号登录
        </Button>
        <Button type="primary" block={true} style={{ margin: '0.3rem 0' }}>
          注册
        </Button>
      </div>
      <div style={{ textAlign: 'center', margin: '0.1rem 0 0.8rem 0' }}>
        其他方式登录
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

export default index;
