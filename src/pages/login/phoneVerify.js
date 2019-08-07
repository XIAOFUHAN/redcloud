import React, { useState } from 'react';
import { Icon, Avatar, Button, Input, Tooltip } from 'antd';
import router from 'umi/router';
import nickName from './nickName';
function phoneVerify() {
  const [num, setNum] = useState('');
  const nickName = () => {
    console.log(num);
    if (num == 123456) {
      router.push('/login/nickname');
    } else {
      alert('请输入正确的验证码123456');
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
      <p style={{ paddingLeft: '0.1rem', color: '#ccc', marginTop: '0.2rem' }}>
        为了安全起见我们会向你的手机发送短信验证码
      </p>
      {/* 输入框 */}
      <div style={{ padding: '0 0.3rem' }}>
        <Input
          placeholder="请输入验证码"
          prefix={<Icon type="monitor" style={{ color: 'rgba(0,0,0,.25)' }} />}
          onChange={e => setNum(e.target.value)}
          style={{ margin: '0.2rem 0' }}
        />
        <Button
          type="primary"
          block={true}
          style={{ margin: '0.3rem 0' }}
          onClick={() => nickName()}
        >
          下一步
        </Button>
      </div>
    </div>
  );
}

export default phoneVerify;
