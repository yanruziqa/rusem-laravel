export default function NavMenu({ children }) {
    return (
        <div className="header-navigation d-none d-xl-block">
            <nav className="menu-primary">
                <ul className="menu-primary__container">
                    <li>
                        <a href="#">
                            <span>Become an Instructor</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
