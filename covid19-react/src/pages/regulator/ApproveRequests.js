import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './DummyApproveRequests.js';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

function Approve_requests() {
    return (
        <Layout>
            <Header>TOKEN REQUESTS</Header>
            <Layout>
                <Sider>left sidebar</Sider>
                <Content>
                    {/* ReactDOM.render(
                    <Table columns={columns} dataSource={data} />, mountNode); */}
                    {/* Kentaro this is broken rn */}
                </Content>
                <Sider>right sidebar</Sider>
            </Layout>
            <Footer>footer</Footer>
        </Layout>
    );
}

export default Approve_requests;
