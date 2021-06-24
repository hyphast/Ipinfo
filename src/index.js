import React from 'react';
import ReactDom from 'react-dom';
import IpInfoContainer from './components/IpContainer';

const destination = document.querySelector('#container');

ReactDom.render(
    <IpInfoContainer />,
    destination);
