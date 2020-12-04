import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import Navbar from '../components/navbar';

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
                    width: '90vw',
                    padding: '4vw',
                    borderRadius: '12px',
                }}
            >
                <div style={{ fontWeight: 'bold', fontSize: '30px' }}>Past Transactions</div>
                <div
                    style={{
                        width: '82vw',
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
                                  width: '82vw',
                                  border: '1px rgba(151, 151, 151, 1) solid',
                                  borderRadius: '15px',
                                  marginBottom: '3vw',
                                  padding: '1vw 2vw 1vw 2vw',
                              }}
                          >
                              <div>
                                  <span style={{ fontWeight: 'bold' }}>Shipment ID:&emsp;</span>
                                  {transaction._id}
                              </div>
                              {transaction.comments}
                          </div>
                      ))}
            </div>
        </div>
    );
}

export default History;
