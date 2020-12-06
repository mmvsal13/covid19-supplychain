import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Input, Button, Steps, Divider } from 'antd';
import {
    AimOutlined,
    SearchOutlined,
    CalendarOutlined,
    PushpinOutlined,
    BellOutlined,
    CheckOutlined,
    CloseOutlined,
} from '@ant-design/icons';
import Navbar from '../components/Navbar.js';

const { Step } = Steps;

function History() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            let { data } = await axios.get('http://localhost:4000/api/token/getRecentTransactions');
            setData(data.transactions);
            console.log(data.transactions);
            setLoading(false);
        };
        fetchData();
    });

    return (
        <div style={{ width: '100vw', height: '100vw', backgroundColor: '#E9FFFA' }}>
            <Navbar />
            <div
                style={{
                    margin: '5vw 7vw 5vw 7vw',
                    backgroundColor: 'white',
                    width: '86vw',
                    padding: '4vw',
                    borderRadius: '12px',
                }}
            >
                <div style={{ fontWeight: 'bold', fontSize: '30px' }}>Past Transactions</div>
                <div
                    style={{
                        width: '78vw',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        margin: '2vw 0 2vw 0',
                    }}
                >
                    <Input placeholder="SEARCH..." size="large" prefix={<SearchOutlined />} />
                    <Button type="primary" size="large" style={{ marginLeft: '1.5em' }}>
                        FILTER
                    </Button>
                </div>

                {loading
                    ? 'Loading'
                    : data.map((transaction) => (
                          <div
                              style={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                  width: '78vw',
                                  border: '1px rgba(151, 151, 151, 1) solid',
                                  borderRadius: '15px',
                                  marginBottom: '3vw',
                                  padding: '1vw 2vw 1vw 2vw',
                              }}
                          >
                              <div
                                  style={{
                                      display: 'flex',
                                      flexDirection: 'row',
                                      justifyContent: 'space-between',
                                      alignItems: 'center',
                                  }}
                              >
                                  <div>
                                      <span style={{ fontWeight: 'bold' }}>Shipment ID:&emsp;</span>
                                      {transaction._id}
                                  </div>
                                  <div
                                      style={{
                                          fontSize: '20px',
                                          fontWeight: 'bold',
                                          color: 'rgba(112, 190, 221, 1)',
                                      }}
                                  >
                                      {' '}
                                      {transaction.tokenId.length}
                                      {' vaccines'}
                                  </div>
                              </div>
                              <Steps
                                  labelPlacement="vertical"
                                  style={{ margin: '1vw 0 1vw 0' }}
                                  current={1}
                              >
                                  <Step title="Blocky Biotech" subTitle="Manufacturer" />
                                  <Step title="DaPlug Bois" subTitle="Supplier" />
                                  <Step title="Provider People" subTitle="Provider" />
                                  <Step title="Final Receiver" subTitle="Recipient" />
                              </Steps>
                              <div
                                  style={{
                                      display: 'flex',
                                      flexDirection: 'row',
                                      justifyContent: 'space-between',
                                      alignItems: 'center',
                                  }}
                              >
                                  <div>
                                      <PushpinOutlined />{' '}
                                      <span style={{ fontWeight: 'bold' }}>
                                          Dispatch Location:&nbsp;
                                      </span>{' '}
                                      San Francisco, California{' '}
                                  </div>
                                  <div>
                                      <AimOutlined />{' '}
                                      <span style={{ fontWeight: 'bold' }}>
                                          Current Location:&nbsp;
                                      </span>{' '}
                                      Los Angeles, California{' '}
                                  </div>
                                  <div>
                                      <CalendarOutlined />{' '}
                                      <span style={{ fontWeight: 'bold' }}>
                                          Dispatch Date:&nbsp;
                                      </span>{' '}
                                      {transaction.date}{' '}
                                  </div>
                              </div>
                              <Divider />
                              <div
                                  style={{
                                      display: 'flex',
                                      flexDirection: 'row',
                                      justifyContent: 'space-between',
                                      alignItems: 'center',
                                  }}
                              >
                                  <div
                                      style={{
                                          display: 'flex',
                                          flexDirection: 'row',
                                          justifyContent: 'flex-start',
                                          alignItems: 'flex-start',
                                      }}
                                  >
                                      <BellOutlined style={{ margin: '0.5em 10px 0 0' }} />
                                      <div
                                          style={{
                                              display: 'flex',
                                              flexDirection: 'column',
                                              width: '50vw',
                                          }}
                                      >
                                          <div style={{ fontWeight: 'bold ' }}>
                                              Shipment Updates:{' '}
                                          </div>
                                          {transaction.comments}
                                      </div>
                                  </div>
                                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                                      <div style={{ color: '#649F63' }}>
                                          <CheckOutlined />
                                          {'  '}
                                          Shipment is currently on track{' '}
                                      </div>
                                      <div style={{ color: '#990202' }}>
                                          <CloseOutlined />
                                          {'  '}
                                          Improper handling of vaccines{' '}
                                      </div>
                                  </div>
                              </div>
                          </div>
                      ))}
            </div>
        </div>
    );
}

export default History;
