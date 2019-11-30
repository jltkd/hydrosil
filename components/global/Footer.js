function Footer( { menu } ) {
    return (
        <div className="responsive-container Footer">
             <ul key="footer-menu" className="footer-menu d-flex">
                {menu.items.map((menuItem, index) => (
                    <li className="menu-item">
                        <a key={menuItem.ID} href={menuItem.slug}>{menuItem.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    ) 

}
export default Footer;