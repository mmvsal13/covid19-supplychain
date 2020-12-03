import React from 'react';
import { Link } from 'react-router-dom';

function UserHeader(props) {
    const tabs = [
        { name: 'Request', url: '' },
        { name: 'Send', url: '/users' },
        { name: 'Status', url: '/' },
    ];

    return (
        <div
            style={{
                width: '90vw',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            {tabs.map((tab, i) => (
                <div
                    style={{
                        borderTopRightRadius: '10px',
                        borderTopLeftRadius: '10px',
                        backgroundColor:
                            props.active == tab.name ? 'rgba(255, 240, 219, 1)' : 'white',
                        border: '2px rgba(255, 240, 219, 1) solid',
                        width: '28vw',
                        height: '2.9vw',
                        fontSize: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Link to={tabs.url} style={{ color: 'black' }}>
                        {tab.name}
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default UserHeader;
