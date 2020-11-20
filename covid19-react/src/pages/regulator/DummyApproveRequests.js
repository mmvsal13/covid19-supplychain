import { Table, Tag, Space } from 'antd';

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
        //     render: (tags) => (
        //         <>
        //             {tags.map((tag) => {
        //                 if (tag === 'Untrusted') {
        //                     color = 'volcano';
        //                 } else if (tag === 'Distributor') {
        //                     color = 'geekblue-1';
        //                 } else if (tag === 'Manufacturer') {
        //                     color = 'geekblue-2';
        //                 } else if (tag === 'Retailer') {
        //                     color = 'geekblue-3';
        //                 } else if (tag === 'Hospital') {
        //                     color = 'geekblue-4';
        //                 } else if (tag === 'Trusted') {
        //                     color = 'purple-6';
        //                 } else if (tag === 'Trump') {
        //                     color = 'volcano-6';
        //                 } else if (tag === 'BTC tps') {
        //                     color = 'green-4';
        //                 } else if (tag === 'VISA tps') {
        //                     color = 'green-3';
        //                 } else if (tag === 'Oski') {
        //                     color = 'green-2';
        //                 } else if (tag === 'Sus') {
        //                     color = 'green-1';
        //                 } else if (tag === 'Simp') {
        //                     color = 'green-0';
        //                 }
        //                 return (
        //                     <Tag color={color} key={tag}>
        //                         {tag.toUpperCase()}
        //                     </Tag>
        //                 );
        //             })}
        //         </>
        //     ),
        // },
        // {
        //     title: 'Action',
        //     key: 'action',
        //     render: (text, record) => (
        //         <Space size="middle">
        //             <a>Approve</a>
        //             <a>Deny</a>
        //             <a>Message</a>
        //         </Space>
        //     ),
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

export default columns;
