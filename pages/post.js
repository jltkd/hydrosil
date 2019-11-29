import Link from 'next/link'
import Router from 'next/router'
import { useRouter } from 'next/router'


import fetch from 'isomorphic-unfetch'

import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
import ReactToPrint from 'react-to-print';


export default class App extends React.Component {
  pdfExportComponent;
  static async getInitialProps({ query: { pid = 0 } }) {
    const r = await fetch(
      `https://hydro.server8.turnkeydigital.dev/wp-json/wp/v2/test/${pid}`
    )
    const p = await r.json()
    return {
      post: p,
      pid:pid
    }
  }

  render() {
    return (
      <div>

        <PDFExport ref={(component) => this.pdfExportComponent = component} paperSize="A4">
          <div ref={el => (this.componentRef = el)}>
            <h1>Post ID: {this.props.pid} </h1>
            <p>ACF Test field: {this.props.post.acf.acf_test_field}</p>
          </div>
        </PDFExport>

        <button className="k-button" onClick={this.exportPDFWithComponent}>Export with component</button>
        <ReactToPrint
          trigger={() => <a href="#">Print this out!</a>}
          content={() => this.componentRef}
        />
      </div>
    )
  }
  
  exportPDFWithComponent = () => {
    this.pdfExportComponent.save();
  }
}
