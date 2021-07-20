import { Component } from 'react';
import QrReader from 'react-qr-scanner';

class QrContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.handleScan = this.handleScan.bind(this);
  }

  handleScan(scanResult) {
    if (scanResult) {
      console.log(scanResult);
      this.setState(scanResult);
      return;
    }
  }
  handleError(err) {
    console.log(err);
  }
  render() {
    const previewStyle = {
      height: 700,
      width: 1000
    };
    return (
      <>
        <QrReader
          delay={100}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
        />
        {this.state.text && <p>Results: {this.state.text}</p>}
      </>
    );
  }
}

export default QrContainer;
