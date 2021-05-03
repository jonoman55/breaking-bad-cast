import React from 'react';

const ApiCredit = () => {
    return (
        <section style={{ alignItems: 'center', justifyContent: 'center', padding: '25px', display: 'flex' }}>
            <div style={{ width: '500px', margin: 'auto', padding: '5px' }}>
                <p style={{ textAlign: 'center', fontSize: '1.25rem', padding: '5px' }}>
                    <i style={{ padding: '10px' }} className='fa fa-flask' aria-hidden='true'></i>
                    API by
                    <a style={{ color: '#3fb573', padding: '5px' }} href="https://breakingbadapi.com/" target="blank">
                        breakingbadapi.com
                    </a>
                </p>
            </div>
        </section>
    );
}

export default ApiCredit;
