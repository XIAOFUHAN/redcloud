import React, { Component } from 'react'
import { Icon, List, message, Avatar, Spin } from 'antd';
import reqwest from 'reqwest';
import Styles from "../css/share.css";
import InfiniteScroll from 'react-infinite-scroller';
import Footer from '../components/Footer'

const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';
const data = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
];

export default class fans extends Component {



    render() {
        return (
            <div>
                {/* 头部导航栏 */}
                <div className={Styles.header}>
                    {/* <PageHeader onBack={() => null} title="Title" subTitle="This is a subtitle" /> */}
                    <span className={Styles.back}><Icon type="left" /></span>
                    <span className={Styles.action}>粉丝</span>
                    <span className={Styles.share}><Icon type="appstore" /></span>
                </div>
                <hr />
                {/* 头部导航栏结束 */}

                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title={<a href="https://ant.design">{item.title}</a>}
                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                            />
                        </List.Item>
                    )}
                />,
                <div>
                    <Footer />
                </div>
            </div>
        )
    }
}
