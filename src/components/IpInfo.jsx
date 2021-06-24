import React from 'react';

const IpInfo = (props) => {
        return (<div className="IpInfo">
        <p>as: "{props.ipInfo.as}"</p>
        <p>city: "{props.ipInfo.city}"</p>
        <p>country: "{props.ipInfo.country}"</p>
        <p>countryCode: "{props.ipInfo.countryCode}"</p>
        <p>isp: "{props.ipInfo.isp}"</p>
        <p>lat: "{props.ipInfo.lat}"</p>
        <p>lon: "{props.ipInfo.lon}"</p>
        <p>query: "{props.ipInfo.query}"</p>
        <p>region: "{props.ipInfo.region}"</p>
        <p>regionName: "{props.ipInfo.regionName}"</p>
        <p>status: "{props.ipInfo.status}"</p>
        <p>timezone: "{props.ipInfo.timezone}"</p>
        <p>zip: "{props.ipInfo.zip}"</p>
        </div>)
}

export default IpInfo;