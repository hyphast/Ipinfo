import React, { Fragment } from 'react';

const IpAddress = (props) => {
    return <div className="container">
    <div className="ipAddress">{props.ip}</div>
    <p className="ipTitle">(Это ваш IP-aдрес)</p>
   </div>
}

export default IpAddress;