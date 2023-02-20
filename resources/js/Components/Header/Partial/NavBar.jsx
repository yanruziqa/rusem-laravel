import NavMenu from "./NavMenu";
export default function NavBar({ children }) {
    return (
        <div className="header-inner">
            <div className="header-serach">
                <form action="index-main.html#">
                    <input type="text" className="header-serach__input" placeholder="Search..." />
                    <button className="header-serach__btn">
                        <i className="fas fa-search"></i>
                    </button>
                </form>
            </div>
            <NavMenu />
            <div className="header-user d-none d-lg-flex">
                <div className="header-user__button">
                    <a className="header-user__login" href="https://app.ruangseminar.id">Log In</a>
                </div>
                <div className="header-user__button">
                    <a className="header-user__signup btn btn-primary btn-hover-primary" href="https://app.ruangseminar.id">Sign Up</a>
                </div>
            </div>
            <div className="header-toggle">
                <button className="header-toggle__btn d-xl-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMobileMenu">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </button>
                <button className="header-toggle__btn search-open d-flex d-md-none">
                    <span className="dots"></span>
                    <span className="dots"></span>
                    <span className="dots"></span>
                </button>
            </div>
        </div>
    );
}
