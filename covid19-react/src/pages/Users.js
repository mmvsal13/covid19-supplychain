import React, { useState } from 'react';
import { Button, Tabs, Input, Upload, message } from 'antd';
import { LoadingOutlined, PaperClipOutlined } from '@ant-design/icons';
import Navbar from '../components/navbar';
import axios from 'axios';

const { TabPane } = Tabs;
const { Dragger } = Upload;

function Users() {
    const [loading, setloading] = useState('');
    const [csvURL, setCSVURL] = useState('');
    const [recipient, setRecipient] = useState('');

    const submit = async () => {
        console.log('clicked');
        message.loading('Sending transactions');
        await axios.post('http://localhost:4000/api/token/batchTransferTokens', { csv: csvURL });
        message.success('Transactions successfully sent');
    };

    const beforeUpload = async (file) => {
        const isCSV = file.type === 'text/csv';
        if (!isCSV) {
            message.error('You can only upload CSV files!', { csv: csvURL, recipient });
        }
        return isCSV;
    };

    const handleChange = (info) => {
        console.log(info);
        if (info.file.status === 'uploading') {
            setloading(true);
            return;
        }
        if (info.file.status === 'done') {
            setloading(false);
            setCSVURL(info.file.response.csv);
        }
    };

    const uploadButton = (
        <div>
            {loading ? (
                <LoadingOutlined style={{ color: 'rgba(112, 190, 221, 1)', fontSize: '5vw' }} />
            ) : (
                <PaperClipOutlined
                    style={{ color: 'rgba(112, 190, 221, 1)', fontSize: '5vw' }}
                    rotate={135}
                />
            )}
            <div style={{ marginTop: 8, fontSize: 20 }}>
                Drag and drop, or <span style={{ color: 'rgba(112, 190, 221, 1)' }}>browse</span>{' '}
                files here
            </div>
            <div>Accepted file types: CSV</div>
        </div>
    );

    return (
        <div style={{ width: '100vw', height: '100vh', backgroundColor: '#E9FFFA' }}>
            <Navbar />
            <div style={{ margin: '5vw' }}>
                <Tabs
                    onChange={() => null}
                    type="card"
                    centered
                    tabBarStyle={{ fontWeight: 'bold', fontSize: '200%' }}
                >
                    <TabPane tab="Request" key="1">
                        Content of Tab Pane 1
                    </TabPane>
                    <TabPane tab="Send" key="2">
                        <div
                            style={{
                                width: '90vw',
                                height: '70vh',
                                backgroundColor: 'rgba(255, 240, 219, 1)',
                                borderBottomLeftRadius: '2vw',
                                borderBottomRightRadius: '2vw',
                                padding: '3vh 25vw 3vh 25vw',
                            }}
                        >
                            <div style={{ fontSize: '20px' }}>Receiver Wallet Address</div>
                            <Input onChange={(text) => setRecipient(text)} />

                            <div style={{ fontSize: '20px', marginTop: '2vh' }}>
                                {' '}
                                Token Information{' '}
                            </div>
                            <div style={{ height: '30vh', width: '100%' }}>
                                <Dragger
                                    name="csv"
                                    listType="picture-card"
                                    className="avatar-uploader"
                                    showUploadList={false}
                                    action="http://localhost:4000/api/token/uploadCSV"
                                    beforeUpload={beforeUpload}
                                    onChange={handleChange}
                                >
                                    {uploadButton}
                                </Dragger>
                            </div>

                            <div>{csvURL}</div>
                            <Button
                                onClick={submit}
                                style={{ width: '30%', margin: '15vh 35% 0 35%' }}
                                size="large"
                                type="primary"
                            >
                                SEND
                            </Button>
                        </div>
                    </TabPane>
                    <TabPane tab="Receive" key="3">
                        Content of Tab Pane 3
                    </TabPane>
                </Tabs>
            </div>
        </div>
    );
}

export default Users;
