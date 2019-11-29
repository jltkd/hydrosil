// Utilities
import Head from 'next/head'
import Link from 'next/link'

function Header({ menu, seo, title, json_ld }) {
    return (
        <section className="Header">
            <Head>
                <title>{title}</title>
                {seo.map((meta, index) => (
                    <meta name={meta.name} content={meta.content}/>
                ))}
                <script type='application/ld+json' class='yoast-schema-graph yoast-schema-graph--main'>
                    {json_ld}
                </script>
                <link rel="stylesheet" href="https://use.typekit.net/aiw3hgg.css" />
            </Head>
            <div className="container left">
                    <Link href="/">
                        <img className="dim" src="https://hydro.server8.turnkeydigital.dev/wp-content/uploads/2019/09/logo.jpg.webp" />
                    </Link>
            </div>
            {/* Loop for menu */}
            {menu.items.map((menuItem, index) => (
                <a key={menuItem.ID} href={menuItem.slug}>{menuItem.title}</a>
            ))}
            <style jsx global>{`
             * {
                 font-family: 'Proxima Nova', sans-serif;
             }
             .dim {
                 transition:500ms;
                 cursor:pointer;
             }
             .dim:hover {
                 opacity:.8;
             }
            `}
            </style>
        </section>
    )
}

export default Header;