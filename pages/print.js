// Utilities
import Router from 'next/router'
import { useRouter } from 'next/router'
import Link from 'next/link'

// Dependancies
import fetch from 'isomorphic-unfetch'
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
import ReactToPrint from 'react-to-print';

// Custom Components
import Header from '../components/global/Header'
import eventFire from '../functions/eventFire'
import createMarkup from '../functions/createMarkup'

export default class App extends React.Component {

  pdfExportComponent;
  static async getInitialProps({ query: { productID = 0 } }) {
    const productRequest = await fetch(
      `https://hydro.server8.turnkeydigital.dev/wp-json/wp/v2/products/${productID}`
    )
    const productJSON = await productRequest.json()
    
    
    return {
      post: productJSON,
      pid: productID,
      seo: productJSON.yoast_meta,
      title: productJSON.yoast_title
    }
  }

  // functions
  print() {
    eventFire(document.getElementById('productToPript'), 'click');
  }
  


  // When rendered, call print
  componentDidMount() {
    // this.print()
  }

  render() {
    return (
      <section className="root-container">
        <div ref={el => (this.componentRef = el)}>
          <Header seo={this.props.seo} title="Test" json_ld={this.props.json_ld} />
          <section className="responsive-container product-container">
            <div className="post-body">
              <div className="titles">
                <h1>{this.props.post.title.rendered}</h1>
                <h2>{this.props.post.acf.sub_title}</h2>
              </div>
              {/*  */}
              <div className="body_copy" dangerouslySetInnerHTML={createMarkup(this.props.post.acf.body_copy)}></div>
              {/*  */}
              <div className="chartSecton">
                <h4 className="purp-bg">{this.props.post.acf.chart.text}</h4>
                <div className="chartHolder">
                  <img src={this.props.post.acf.chart.chart_image.url}/>
                </div>
              </div>
              {/*  */}
              <div className="tpp">
                <h4 className="purp-bg">{this.props.post.acf.tpp.section_header.toLowerCase()}</h4>
                <table>
                  <thead>
                    <tr>
                      <td>Property:</td>
                      <td>Value:</td>
                    </tr>
                  </thead>
                  <tbody>
                  {this.props.post.acf.tpp.table_generator.map(property =>
                    <tr>
                      <td>{property.property}</td>
                      <td>{property.value}</td>
                    </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

        </div>
        <section className="responsive-container button-holder">
          <h4>This is not part of the section, and we can use this to increase this apps functionality.</h4>
          <ReactToPrint
            trigger={() => <a id="productToPript" href="#">Print this page</a>}
            content={() => this.componentRef}
            removeAfterPrint={true}
            bodyClass={"test"}
          />
          <a>Download this page as a PDF</a>
          <Link href="/">
            <a>See all products specs</a>
          </Link>
        </section>

        <style jsx>{`
          .post-body {
            display:flex;
            align-items: flex-start;
            flex-wrap:wrap;
            justify-content:space-between;
          }
          .titles {
            width:100%;
            padding-top:2em;
            padding-bottom:1em;
            margin-bottom:1em;
            border-bottom:1px solid rgba(0,0,0,.15);
          }
          .body_copy {
            padding-bottom:1em;
          }
          .chartSecton {
            width:calc(50% - 2em);
            border:1px solid;
          }
          .chartHolder {
            padding:1em;
            display:flex;
            align-items: flex-start;
            width:100%;
          }
          .chartHolder img {
            width:100%;
          }
          .tpp {
            width:calc(50% - 2em);
            border:1px solid;
          }
          .product-container h4 {
            padding:.5em;
            text-transform: capitalize;
          }

          .button-holder {
            margin-top:4em;
            border-top:1px solid rgba(0,0,0,.15);
            padding-top:2em;
          }
          .button-holder h4 {
            padding-bottom:1em;
          }
          .button-holder a {
            border:1px solid black;
            padding:1em;
            line-height:0;
            display:inline-block;
            margin-right:.5em;
            cursor: pointer;
            transition:500ms;
          }
          .button-holder a:hover {
            background:rgba(155,155,155,.15)
          }
        `}</style>

      </section>
    )
  }
}


