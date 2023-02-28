import { navbarClick, subMenu } from "./Effect";

export default function Instructor(){
    return (
        <div className="nav-group show">
            <a href="#" className="nav-label" onClick={navbarClick}>Instructor</a>
            <ul className="nav nav-sidebar">
                <li className="nav-item">
                    <a href={route('admin.basic-profile.show')} className="nav-link"><i className="ri-user-line"></i> <span>Profile</span></a>
                </li>
                {/* <li className="nav-item">
                    <a href="#" className="nav-link has-sub" onClick={subMenu}><i className="ri-user-line"></i> <span>Profile</span></a>
                    <nav className="nav nav-sub">
                        <a href={route('admin.basic-profile.show')} className="nav-sub-link">Basic Profile</a>
                    </nav>
                </li> */}
            </ul>
        </div>
    );
}