export default function Offcanvas({categoryList}) {
    const categoryMenu = categoryList.map((category) => 
        <a key={category.id_kategori} href="#" className="menu-content-list__link">{category.nama_kategori}</a>
    );
    return (
        <div className="offcanvas offcanvas-end offcanvas-mobile" id="offcanvasMobileMenu">
            <div className="offcanvas-header bg-white">
                <div className="offcanvas-logo">
                    <a className="offcanvas-logo__logo" href="#">
                        <img src="/static/images/dark-logo.png" alt="Logo" />
                    </a>
                </div>
                <button type="button" className="offcanvas-close" data-bs-dismiss="offcanvas">
                    <i className="fal fa-times"></i>
                </button>
            </div>
            <div className="offcanvas-body">
                <nav className="canvas-menu">
                    <ul className="offcanvas-menu">
                        <li>
                            <a className="active" href="index-main.html#">
                                <span>Category</span>
                            </a>
                            <ul className="mega-menu">
                                <li>
                                    <div className="mega-menu-content">
                                        <div className="row">
                                            <div className="col-xl-3">
                                                <div className="menu-content-list">
                                                    {categoryMenu}
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="menu-content-banner">
                                                    <h4 className="menu-content-banner__title">Bergabunglah bersama kami</h4>
                                                    <a href="index-main.html#" className="menu-content-banner__btn btn btn-primary btn-hover-secondary">Become an Instructor</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="offcanvas-user d-lg-none">
                <div className="offcanvas-user__button">
                    <button className="offcanvas-user__login btn btn-secondary btn-hover-secondarys" data-bs-toggle="modal" data-bs-target="#loginModal">Log In</button>
                </div>
                <div className="offcanvas-user__button">
                    <button className="offcanvas-user__signup btn btn-primary btn-hover-primary" data-bs-toggle="modal" data-bs-target="#registerModal">Sign Up</button>
                </div>
            </div>
        </div>
    );
}
