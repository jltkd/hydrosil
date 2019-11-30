// Utilities
import Link from 'next/link'

// Dependancies
import fetch from 'isomorphic-unfetch'

// Custom Components
import Header from '../components/global/Header'
import Footer from '../components/global/Footer'
import Form from '../components/Form'

function IndexPage({ page, seo, menu, title, json_ld, form }) {
  return (
    <section className="root-container">
      <Header menu={menu} seo={seo} title={title} json_ld={json_ld}/>
      <section className="Hero">
        <img src={page.acf.hero_image.url + ".webp"} />
        <section className="responsive-container">
          <h1>{page.acf.hero_headline}</h1>
          <p>{page.acf.hero_sub_text}</p>
        </section>
        <style jsx>{`
        .Hero {
          position:relative;
          height:60vh;
          overflow:hidden;
        }
        .Hero img {
          position:absolute;
          z-index:0;
          width: 100%;
          top:50%;
          left:50%;
          transform:translate(-50%, -50%);
        }
        .Hero section {
          position: absolute;
          z-index: 1;
          left: 50%;
          transform: translate(-50%, 25vh);
          font-weight:700;
          padding-bottom:2em;
          border-bottom:.25px solid #4D4D4D;
        }
        .Hero section h1 {
          font-size:4em;
          max-width:10em;
        }
      `}</style>
      </section>
      <section className="responsive-container homepage-container">
        <div className="purp-bg d-flex bar-callout">
          <div className="text-holder d-flex">
            <h2>POLLUTANTS <span className="white">INDEX</span></h2>
            <p>|</p>
            <p>Find a product solution to your pollutant.</p>
          </div>
          <div className="button-holder">
            <Link href="/thank-you">
              <a>GO TO INDEX</a>
            </Link>
          </div>
        </div>
        <div className="row thirds">
          <div className="column one-third first">
          <h3>Title</h3>
            <img src="" />
          </div>
          <div className="column one-third second">
            <h3>Title</h3>
            <img src="" />
          </div>
          <div className="column one-third third">
            <h3>Title</h3>
            <img src="" />
          </div>
        </div>
        <div className="row halfs home-call-outs">
        <div className="column half">
            <h2>{page.acf.left_call_out}</h2>
            <div>{unescape(page.acf.left_call_out_body)}</div>
          </div>
          <div className="column half">
            <h2>{page.acf.right_call_out}</h2>
            <div>{unescape(page.acf.right_call_out_body)}</div>
          </div>
        </div>
      <style jsx>{`
        .bar-callout {
          margin-top:2em;
          padding:2em;
        }
      `}</style>
      </section>
      <Footer menu={menu} />
    </section>
  )
}

IndexPage.getInitialProps = async ({ req }) => {
  const pageData = await fetch('https://hydro.server8.turnkeydigital.dev/wp-json/wp/v2/pages/10')
  const pageJSON = await pageData.json()

  const desktopMenu = await fetch('https://hydro.server8.turnkeydigital.dev/wp-json/menus/v1/menus/desktop')
  const menuJSON = await desktopMenu.json()
  
  const formData = await fetch('https://hydro.server8.turnkeydigital.dev/wp-json/frm/v2/forms/1/fields')
  const formJSON = await formData.json()
  const formFields = Object.keys(formJSON).map(i => formJSON[i])

  return {
    page: pageJSON,
    title: pageJSON.yoast_title,
    json_ld: JSON.stringify(pageJSON.yoast_json_ld),
    seo: pageJSON.yoast_meta,
    menu: menuJSON,
    form: formFields
  }
}


export default IndexPage