// Utilities

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
      <section className="responsive-container homepage-container">
        <p>{ page.id }</p>
        <p>Index!</p>
        <img src={page.acf.hero_image.url + ".webp"} />
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