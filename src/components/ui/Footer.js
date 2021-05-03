import React from 'react';

function Footer() {
    return (
        <footer style={{ alignItems: 'center', justifyContent: 'center', padding: '25px', display: 'flex' }}>
            <i style={{ padding: '5px' }} className='fa fa-copyright' aria-hidden='true'></i>
            <strong>
                <p>Copyright by <a style={{ color: '#3fb573' }} href='https://github.com/jonoman55' alt='' target='blank'>
                    John Chiappetta</a>
                </p>
            </strong>
        </footer>
    )
}

export default Footer;
