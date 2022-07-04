import React from 'react';

function NotFound() {
    const myStyle = {
        "marginTop": 90,
        "textAlign": "center",
        "fontWeight": "bold",
        "fontSize": 20,
    };
    return (
        <div style={myStyle}>
            <p>404: Page not found</p>
        </div>
    );
}

export default NotFound;