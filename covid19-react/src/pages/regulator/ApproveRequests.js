import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Layout } from 'antd';
import { Table, Tag, Space } from 'antd';
import Navbar from '../../components/Navbar.js';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: '# of Vaccines',
        dataIndex: 'amount',
        key: 'amount',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (tags) => (
            <>
                {tags.map((tag) => {
                    let color = 'magenta';
                    if (tag === 'Untrusted') {
                        color = 'blue';
                    } else if (tag === 'Distributor') {
                        color = 'geekblue';
                    } else if (tag === 'Manufacturer') {
                        color = 'geekblue';
                    } else if (tag === 'Retailer') {
                        color = 'geekblue';
                    } else if (tag === 'Hospital') {
                        color = 'geekblue';
                    } else if (tag === 'Trusted') {
                        color = 'purple';
                    } else if (tag === 'Trump') {
                        color = 'volcano';
                    } else if (tag === 'BTC tps') {
                        color = 'green';
                    } else if (tag === 'VISA tps') {
                        color = 'green';
                    } else if (tag === 'Oski') {
                        color = 'green';
                    } else if (tag === 'Sus') {
                        color = 'green';
                    } else if (tag === 'Simp') {
                        color = 'green';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <a>Approve</a>
                <a>Deny</a>
                <a>Message</a>
            </Space>
        ),
    },
];

const data = [
    {
        key: '1',
        name: 'Trump COVID Co.',
        amount: 6900,
        address: 'New York No. 1 Lake Park',
        tags: ['Untrusted', 'Trump', 'Retailer', 'Distributor'],
    },
    {
        key: '2',
        name: 'Ayush Inc.',
        amount: 420,
        address: 'London No. 1 Lake Park',
        tags: ['Trusted', 'Manufacturer'],
    },
    {
        key: '3',
        name: 'Moderna',
        amount: 5139009,
        address: 'Sidney No. 1 Lake Park',
        tags: ['Supplier', 'BTC tps', 'Trusted'],
    },
    {
        key: '3',
        name: 'Etherium Inc.',
        amount: 666,
        address: 'Sidney No. 1 Lake Park',
        tags: ['VISA tps', 'Oski'],
    },
    {
        key: '3',
        name: 'Allen Lin Corp.',
        amount: 777,
        address: 'Sidney No. 1 Lake Park',
        tags: ['Sus', 'Oski'],
    },
];

function Approve_requests() {
    return (
        <>
            <Navbar />

            <Table columns={columns} dataSource={data} />
            {/* Kentaro this is broken rn */}
        </>
    );
}

export default Approve_requests;
