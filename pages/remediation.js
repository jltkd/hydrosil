// Utilities

// Dependancies
import fetch from 'isomorphic-unfetch'

// Custom Components
import Header from '../components/global/Header'
import Footer from '../components/global/Footer'

function RemediationPage({ page, seo, menu, title, json_ld }) {
  return (
    <div>
      <Header menu={menu} seo={seo} title={title} json_ld={json_ld} />
      <p>{ page.id }</p>
      <p>Remediation</p>
      <Footer />
    </div>
  )
}

RemediationPage.getInitialProps = async ({ req }) => {
  const pageData = await fetch('https://hydro.server8.turnkeydigital.dev/wp-json/wp/v2/pages/36')
  const pageJSON = await pageData.json()

  const desktopMenu = await fetch('https://hydro.server8.turnkeydigital.dev/wp-json/menus/v1/menus/desktop')
  const menuJSON = await desktopMenu.json()
  
  return {
    page: pageJSON,
    title: pageJSON.yoast_title,
    json_ld: JSON.stringify(pageJSON.yoast_json_ld),
    seo: pageJSON.yoast_meta,
    menu: menuJSON
  }
}


export default RemediationPage;