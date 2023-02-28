import { navbarClick, subMenu } from "./Effect";

export default function Administrator(){
    return (
        <div className="nav-group show">
            <a href="#" className="nav-label" onClick={navbarClick}>Administrator</a>
            <ul className="nav nav-sidebar">
                <li className="nav-item">
                    <a href="#" className="nav-link has-sub" onClick={subMenu}><i className="ri-group-line"></i> <span>Administrasi User</span></a>
                    <nav className="nav nav-sub">
                        <a href={route('admin.profile.list')} className="nav-sub-link">Daftar User</a>
                        {/* <a href="../docs/layout-columns.html" className="nav-sub-link">Columns</a>
                        <a href="../docs/layout-gutters.html" className="nav-sub-link">Gutters</a> */}
                    </nav>
                </li>
            </ul>
        </div>
    );
}