import React, { useState } from 'react';
import { Button, Input, Upload, message } from 'antd';
import { LoadingOutlined, PaperClipOutlined } from '@ant-design/icons';
import Navbar from '../components/Navbar.js';
import axios from 'axios';
import UserHeader from '../components/UserHeader';
import Web3 from 'web3';
import contractAbi from '../contracts/COVID19Supplychain.json';
const BigNumber = require('bignumber.js');

let web3 = undefined;

const { Dragger } = Upload;

function Users() {
    const [loading, setloading] = useState('');
    const [csvURL, setCSVURL] = useState('');
    const [recipient, setRecipient] = useState('');
    const [data, setData] = useState('');

    const submit = async () => {
        try {
            console.log(data);
            console.log('handling login');
            message.loading('Sending transactions');
            // Check if MetaMask is installed
            if (!window.ethereum) {
                // what is window
                console.log('checking for metamask');
                window.alert('Please install MetaMask first.');
                return;
            }

            if (!web3) {
                try {
                    // Request account access if needed
                    await window.ethereum.enable();

                    // We don't know window.web3 version, so we use our own instance of Web3
                    // with the injected provider given by MetaMask
                    web3 = new Web3(window.ethereum);
                } catch (error) {
                    window.alert('You need to allow MetaMask.');
                    return;
                }
            }
            const coinbase = await web3.eth.getCoinbase();
            if (!coinbase) {
                window.alert('Please activate MetaMask first.');
                return;
            }

            const publicAddress = coinbase.toLowerCase();
            const contractInstance = new web3.eth.Contract(
                contractAbi.abi,
                '0x90c1450451621d98779020b39b8951d94de1fdc2'
            );

            // await contractInstance.methods
            //     .setMinterAuthorization(publicAddress, true)
            //     .send({ from: publicAddress, gasPrice: '100' });

            // await contractInstance.methods.mint(10).send({ from: publicAddress, gasPrice: '1000' });

            // let res = await contractInstance.methods
            //     .getTokenByOwner('0xb1766787e2241578c9df8793b7874d3f3d32acd1')
            //     .call();
            // console.log(res);
            // res = await contractInstance.methods.getTokenByOwner(publicAddress).call();
            // console.log(res);

            const newData = data.map((num) => new BigNumber(num));
            await contractInstance.methods
                .safeBatchTransferFrom(
                    publicAddress,
                    recipient,
                    newData,
                    new Array(data.length).fill(new BigNumber(1)),
                    '0xd9b67a26'
                )
                .send({ from: publicAddress, gasPrice: '100' });

            message.loading('Updating Server');

            console.log('clicked');
            await axios.post('http://localhost:4000/api/token/batchTransferTokens', {
                csv: csvURL,
                recipient,
            });
            message.success('Transactions successfully sent');
        } catch (e) {
            console.log(e);
            message.error(e.message);
        }
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
            setData(info.file.response.data);
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
                <UserHeader active="Send" />
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
                    <Input onChange={(event) => setRecipient(event.target.value)} />

                    <div style={{ fontSize: '20px', marginTop: '2vh' }}> Token Information </div>
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
            </div>
        </div>
    );
}

export default Users;
