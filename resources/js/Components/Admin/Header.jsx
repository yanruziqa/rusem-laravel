import $ from 'jquery';

export default function Header(user) {
    const menuSidebar = (e) => {
        e.preventDefault();
        
        if(window.matchMedia('(min-width: 992px)').matches) {
            $('body').toggleClass('sidebar-hide');
        } else {
            $('body').toggleClass('sidebar-show');
        }
    };
    
    return (
        <div className="header-main px-3 px-lg-4">
            <a id="menuSidebar" onClick={menuSidebar} href="#" className="menu-link me-3 me-lg-4"><i className="ri-menu-2-fill"></i></a>

            <div className="form-search me-auto">
                <input type="text" className="form-control" placeholder="Search" />
                <i className="ri-search-line"></i>
            </div>

            <div className="dropdown dropdown-notification ms-3 ms-xl-4">
                <a href="helpdesk.html" className="dropdown-link" data-bs-toggle="dropdown" data-bs-auto-close="outside"><small>3</small><i className="ri-notification-3-line"></i></a>
                <div className="dropdown-menu dropdown-menu-end mt-10-f me--10-f">
                <div className="dropdown-menu-header">
                    <h6 className="dropdown-menu-title">Notifications</h6>
                </div>
                <ul className="list-group">
                    <li className="list-group-item">
                    <div className="avatar online"><img src="/assets/img/img10.jpg" alt="" /></div>
                    <div className="list-group-body">
                        <p><strong>Dominador Manuel</strong> and <strong>100 other people</strong> reacted to your comment "Tell your partner that...</p>
                        <span>Aug 20 08:55am</span>
                    </div>
                    </li>
                    <li className="list-group-item">
                    <div className="avatar online"><img src="/assets/img/img11.jpg" alt="" /></div>
                    <div className="list-group-body">
                        <p><strong>Angela Ighot</strong> tagged you and <strong>9 others</strong> in a post.</p>
                        <span>Aug 18 10:30am</span>
                    </div>
                    </li>
                    <li className="list-group-item">
                    <div className="avatar"><span className="avatar-initial bg-primary">a</span></div>
                    <div className="list-group-body">
                        <p>New listings were added that match your search alert <strong>house for rent</strong></p>
                        <span>Aug 15 08:10pm</span>
                    </div>
                    </li>
                    <li className="list-group-item">
                    <div className="avatar online"><img src="/assets/img/img14.jpg" alt="" /></div>
                    <div className="list-group-body">
                        <p>Reminder: <strong>Jerry Cuares</strong> invited you to like <strong>Cuares Surveying Services</strong>. <br /><a href="helpdesk.html">Accept</a> or <a href="helpdesk.html">Decline</a></p>
                        <span>Aug 14 11:50pm</span>
                    </div>
                    </li>
                    <li className="list-group-item">
                    <div className="avatar online"><img src="/assets/img/img15.jpg" alt="" /></div>
                    <div className="list-group-body">
                        <p><strong>Dyanne Aceron</strong> reacted to your post <strong>King of the Bed</strong>.</p>
                        <span>Aug 10 05:30am</span>
                    </div>
                    </li>
                </ul>
                <div className="dropdown-menu-footer"><a href="helpdesk.html">Show all Notifications</a></div>
                </div>
            </div>
        </div>
    );
}
