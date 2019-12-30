
import React from 'react';
import ReactDOM from 'react-dom';
import { savePDF } from '@progress/kendo-react-pdf';

class App extends React.Component {
  image;

  render() {
    return (
      <div>
        <div className="example-config">
          <button className="k-button" onClick={() => { savePDF(this.image); }}>
            Export PDF with default resolution
                    </button>
          &nbsp;
                    <button className="k-button" onClick={() => { savePDF(this.image, { imageResolution: 36 }); }}>
            Export PDF with 36 dpi
                    </button>
        </div>
        <div ref={(image) => this.image = image}>
          <h1>Sup</h1>
          <img
            src="purpleLogo.png"
            width="750px"
          />
        </div>
      </div>
    );
  }
}

export default App;

