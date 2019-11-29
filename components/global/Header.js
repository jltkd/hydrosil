// Utilities
import Head from 'next/head'
import Link from 'next/link'

function Header({ menu, seo, title, json_ld }) {
    return (
        <section className="purp-bg gradient-header">
            <section className="Header responsive-container purp-bg">
                <Head>
                    <title>{title}</title>
                    {seo.map((meta, index) => (
                        <meta name={meta.name} content={meta.content}/>
                    ))}
                    <script type='application/ld+json' className='yoast-schema-graph yoast-schema-graph--main'>
                        {json_ld}
                    </script>
                    <link rel="stylesheet" href="https://use.typekit.net/aiw3hgg.css" />
                </Head>
                <div className="container left">
                        <Link href="/">
                            <img className="dim" src="https://hydro.server8.turnkeydigital.dev/wp-content/uploads/2019/09/logo.jpg.webp" />
                        </Link>
                </div>
                <div className="container right">
                        <div className="container right-top">
                            <ul key="topbar-menu" className="d-flex topbar-menu">
                                <li>SDS</li>
                                <li>sales@hydrosilintl.com</li>
                                <li>REQUEST A QUOTE</li>
                                <li>847.844.0680</li>
                            </ul>
                        </div>
                        <div className="container right-middle">
                            <p>Search</p>
                        </div>
                        <div className="container right-bottom">
                            <ul key="desktop-menu" className="menu d-flex">
                                {menu.items.map((menuItem, index) => (
                                    <li className="menu-item">
                                        <a key={menuItem.ID} href={menuItem.slug}>{menuItem.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                </div>
            </section>
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
                .responsive-container {
                    max-width:1200px;
                    width:88%;
                    margin:auto;
                }
                .purp-bg {
                    background: #783A6F;
                }
                .d-flex {
                    display: flex;
                }
                /*! destyle.css v1.0.11 | MIT License | https://github.com/nicolas-cusan/destyle.css */*{box-sizing:border-box}::after,::before{box-sizing:inherit}html{line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}body{margin:0}main{display:block}address,blockquote,dl,figure,form,iframe,p,pre,table{margin:0}h1,h2,h3,h4,h5,h6{font-size:inherit;line-height:inherit;font-weight:inherit;margin:0}ol,ul{margin:0;padding:0;list-style:none}dt{font-weight:700}dd{margin-left:0}hr{box-sizing:content-box;height:0;overflow:visible;border:0;border-top:1px solid;margin:0;clear:both;color:inherit}pre{font-family:monospace,monospace;font-size:inherit}address{font-style:inherit}a{background-color:transparent;text-decoration:none;color:inherit}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:inherit}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none;vertical-align:bottom}embed,iframe,object{border:0;vertical-align:bottom}button,input,optgroup,select,textarea{-webkit-appearance:none;appearance:none;vertical-align:middle;color:inherit;font:inherit;border:0;background:0 0;padding:0;margin:0;outline:0;border-radius:0;text-align:inherit}[type=checkbox]{-webkit-appearance:checkbox;appearance:checkbox}[type=radio]{-webkit-appearance:radio;appearance:radio}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{cursor:pointer;-webkit-appearance:none;appearance:none}[type=button][disabled],[type=reset][disabled],[type=submit][disabled],button[disabled]{cursor:default}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{margin:0;padding:0;border:0;min-width:0}legend{color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}label[for]{cursor:pointer}details{display:block}summary{display:list-item}table{border-collapse:collapse;border-spacing:0}caption{text-align:left}td,th{vertical-align:top}th{text-align:left;font-weight:700}template{display:none}[hidden]{display:none}
            `}
            </style>
            <style jsx>{`
                .gradient-header {
                    background: rgb(78,37,72);
                    background: linear-gradient(90deg, rgba(78,37,72,1) 0%, rgba(120,58,111,1) 25%, rgba(120,58,111,1) 75%, rgba(78,37,72,1) 100%);
                }
                .Header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                }
                .Header .right {
                    text-align:right;
                }
                .menu li:nth-of-type(1) {
                    margin-left: auto;
                }
            `}</style>
        </section>
    )
}

export default Header;