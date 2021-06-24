import React from 'react';
import IpInfo from './IpInfo';
import IpAddress from './IpAddress';
import Preloader from './Preloader';
import '../IpInfoContainerCss.css';

var xhr;

class IpInfoContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ipInfo: '',
            isFetching: false,
        }
        this.processRequest = this.processRequest.bind(this);
        this.toggleIsFetching = this.toggleIsFetching.bind(this);
    }

    componentDidMount() {
        this.toggleIsFetching(true);
        xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://ip-api.com/json/', true);
        xhr.send();

        xhr.addEventListener('readystatechange', this.processRequest, false);   
    }

    processRequest() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText)
            this.setState({
                ipInfo: response,
            })
            setTimeout(() => this.toggleIsFetching(false),500);
        }
    }

    toggleIsFetching(isFetching) {
        this.setState({
            isFetching,
        })
    }

    render() {
        return (<div>
        {this.state.isFetching 
        ? <Preloader /> 
        : <> <IpAddress ip={this.state.ipInfo.query}/>
        <IpInfo ipInfo={this.state.ipInfo}/> </>}
        </div>)
    }
}

export default IpInfoContainer;

