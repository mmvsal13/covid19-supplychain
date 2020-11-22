import React, { useState } from 'react';
import { Button, Tabs, Input, Upload, message } from 'antd';
import { LoadingOutlined, PaperClipOutlined } from '@ant-design/icons';

import axios from 'axios';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const { TabPane } = Tabs;

function Users() {
    const [loading, setloading] = useState('');
    const [imageUrl, setimageUrl] = useState('');

    const submit = async () => {
        console.log('clicked');
    };

    const beforeUpload = async (file) => {
        console.log(file);
        const isCSV = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isCSV) {
            message.error('You can only upload JPG/PNG file!');
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
            setimageUrl(info.file.response.csv);
        }
    };

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PaperClipOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    return (
        <div
            style={{ width: '100vw', height: '100vh', backgroundColor: '#E9FFFA', padding: '5vw' }}
        >
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
                            height: '100%',
                            backgroundColor: 'rgba(255, 240, 219, 1)',
                            borderBottomLeftRadius: '2vw',
                            borderBottomRightRadius: '2vw',
                            padding: '3vh 25vw 3vh 25vw',
                        }}
                    >
                        <div>Receiver ID</div>
                        <Input />

                        <div style={{ fontSize: '20px' }}> Token Information </div>
                        <Upload
                            name="csv"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="http://localhost:4000/api/token/uploadCSV"
                            beforeUpload={beforeUpload}
                            onChange={handleChange}
                        >
                            {uploadButton}
                        </Upload>
                        <div>{imageUrl}</div>
                        <Button onClick={submit}>Send</Button>
                    </div>
                </TabPane>
                <TabPane tab="Receive" key="3">
                    Content of Tab Pane 3
                </TabPane>
            </Tabs>
        </div>
    );
}

export default Users;
