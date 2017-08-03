import React from 'react';
import ReactDOM from 'react-dom';
import ReactPlaceholder from '../src';
import {
  TextBlock,
  MediaBlock,
  TextRow,
  RectShape,
  RoundShape
} from '../src/placeholders';

import '../src/reactPlaceholder.scss';

class Example extends React.Component {

  state = {
    ready: false,
    readyCustom: false,
    readyFirstLaunch: false,
    textBlockRows: 6,
    mediaBlockRows: 4
  };

  onChange = (key) => ({ target: { value } }) => {
    this.setState({ [key]: parseInt(value) || '' });
  }

  toggleReady = () => {
    this.setState({ ready: !this.state.ready });
  }

  toggleReadyCustom = () => {
    this.setState({ readyCustom: !this.state.readyCustom });
  }

  toggleReadyFirstLaunch = () => {
    this.setState({ readyFirstLaunch: !this.state.readyFirstLaunch });
  }

  render() {
    const buttonStyle = {
      marginBottom: 10
    };

    const customPlaceholder = (
      <div>
        I'm a custom filler!!
        <TextRow className="qwe" color="#edeff2" style={{ width: '100%', height: '20px' }} />
        <TextRow className="qwe" color="#edeff2" style={{ width: '100%', height: '20px' }} />
        <TextRow className="qwe" color="#edeff2" style={{ width: '100%', height: '20px' }} />
      </div>
    );

    const realComponent = (
      <div style={{ padding: 10, backgroundColor: '#F0F0F0', color: 'red' }}>
        I'm the real component!
      </div>
    );

    return (
      <div style={{ margin: 30 }}>
        <h1>Using ReactPlaceholder types</h1>
        <button onClick={this.toggleReady} style={buttonStyle}>
          {this.state.ready ? 'set loading' : 'set ready'}
        </button>
        <p>"text"</p>
        <div className='ui input'>
          <span style={{ lineHeight: '40px' }}>
            nº of rows:
          </span>
          <input
            type='number'
            value={this.state.textBlockRows || ''}
            onChange={this.onChange('textBlockRows')}
            style={{ width: 80, marginLeft: 5 }}
          />
        </div>
        <div className='ui segment'>
          <ReactPlaceholder
            ready={this.state.ready}
            rows={this.state.textBlockRows}
            color='#E0E0E0'
            className='my-text-block'
          >
            {realComponent}
          </ReactPlaceholder>
        </div>

        <p>"media (with loading animation)"</p>
        <div className='ui input'>
          <span style={{ lineHeight: '40px' }}>
            nº of rows:
          </span>
          <input
            type='number'
            value={this.state.mediaBlockRows || ''}
            onChange={this.onChange('mediaBlockRows')}
            style={{ width: 80, marginLeft: 5 }}
          />
        </div>
        <div className='ui segment'>
          <ReactPlaceholder
            showLoadingAnimation
            ready={this.state.ready}
            type='media'
            rows={this.state.mediaBlockRows}
            className='my-text-block'
          >
            {realComponent}
          </ReactPlaceholder>
        </div>

        <p>"textRow"</p>
        <div className='ui segment'>
          <ReactPlaceholder
            ready={this.state.ready}
            type='textRow'
            color='#E0E0E0'
            className='my-text-row'
          >
            {realComponent}
          </ReactPlaceholder>
        </div>

        <p>"rect"</p>
        <div className='ui segment'>
          <ReactPlaceholder
            ready={this.state.ready}
            type='rect'
            color='#E0E0E0'
            style={{ width: 50, height: 50 }}
            className='my-rect'
          >
            {realComponent}
          </ReactPlaceholder>
        </div>

        <p>"round"</p>
        <div className='ui segment'>
          <ReactPlaceholder
            ready={this.state.ready}
            type='round'
            color='#E0E0E0'
            style={{ width: 50, height: 50 }}
            className='my-round'
          >
            {realComponent}
          </ReactPlaceholder>
        </div>

        <h1>passing a customPlaceholder</h1>
        <button onClick={this.toggleReadyCustom} style={buttonStyle}>
          {this.state.readyCustom ? 'set loading' : 'set ready'}
        </button>
        <div className='ui segment'>
          <ReactPlaceholder
            showLoadingAnimation
            ready={this.state.readyCustom}
            customPlaceholder={customPlaceholder}
          >
            {realComponent}
          </ReactPlaceholder>
        </div>

        <h1>Using ReactPlaceholder with firstLaunchOnly=true</h1>
        <button onClick={this.toggleReadyFirstLaunch} style={buttonStyle}>
          {this.state.readyFirstLaunch ? 'set loading' : 'set ready'}
        </button>
        <p>Will show filler only once</p>
        <div className='ui segment'>
          <ReactPlaceholder
            ready={this.state.readyFirstLaunch}
            rows={4}
            color='#E0E0E0'
            className='my-text-block'
            firstLaunchOnly
          >
            {realComponent}
          </ReactPlaceholder>
        </div>

        <h1>Using default placeholders directly</h1>
        <p>They don't accept children</p>
        <p>TextBlock</p>
        <div className='ui segment'>
          <TextBlock
            color='#E0E0E0'
            rows={4}
            className='my-text-row'
          />
        </div>
        <p>MediaBlock</p>
        <div className='ui segment'>
          <MediaBlock
            color='#E0E0E0'
            rows={4}
            className='my-text-row'
          />
        </div>
        <p>TextRow</p>
        <div className='ui segment'>
          <TextRow
            color='#E0E0E0'
            className='my-text-row'
          />
        </div>

        <p>RectShape</p>
        <div className='ui segment'>
          <RectShape
            color='#E0E0E0'
            className='my-text-row'
            style={{ width: 50, height: 50 }}
          />
        </div>

        <p>RoundShape</p>
        <div className='ui segment'>
          <RoundShape
            color='#E0E0E0'
            className='my-text-row'
            style={{ width: 50, height: 50 }}
          />
        </div>

      </div>
    );
  }

}

ReactDOM.render(<Example />, document.getElementById('container'));
