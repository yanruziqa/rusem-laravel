import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'
import $ from 'jquery';
import Instructor from './Navbar/Instructor';
import Administrator from './Navbar/Administrator';

const footerMenu = (e) => {
    e.preventDefault();
    $(e.target).closest('.sidebar').toggleClass('footer-menu-show');
};

const role = {
  0: {
    menu: <></>,
    name: 'Menunggu Verifikasi'
  },
  1: {
    menu: <Administrator key="1" />,
    name: 'Administrator'
  },
  2: {
    menu: <Instructor key="2" />,
    name: 'Instructor'
  },
}

function NavbarList(props){
  var displayData = [];
  var userLevel = props.level;
  Object.keys(role).map((level) => {
      if(level & userLevel){
          displayData.push(role[level].menu);
      }
  });

  return displayData;
}

export default function Sidebar(user) {
    return (
      <div className="sidebar">
        <div className="sidebar-header">
          <a href="/" className="sidebar-logo">ruangseminar</a>
        </div>
        <PerfectScrollbar id="sidebarMenu" className="sidebar-body">
          <NavbarList level={user.user.level} />
        </PerfectScrollbar>
        <div className="sidebar-footer">
          <div className="sidebar-footer-top">
            <div className="sidebar-footer-thumb">
              <img src="/assets/img/img1.jpg" alt="" />
            </div>
            <div className="sidebar-footer-body">
              <h6><a href="../pages/profile.html">{user.user.name}</a></h6>
              <p>{role[user.user.level].name}</p>
            </div>
            <a id="sidebarFooterMenu" onClick={footerMenu} href="#" className="dropdown-link"><i className="ri-arrow-down-s-line"></i></a>
          </div>
          <div className="sidebar-footer-menu">
            <nav className="nav">
              <a href={route('admin.profile.edit')}><i className="ri-edit-2-line"></i> Edit Profile</a>
              <a href={route('admin.dashboard')}><i className="ri-pie-chart-line"></i> Dashboard</a>
            </nav>
            <hr />
            <nav className="nav">
              <a href="helpdesk.html"><i className="ri-question-line"></i> Help Center</a>
              <a href="helpdesk.html"><i className="ri-lock-line"></i> Privacy Settings</a>
              <a href="helpdesk.html"><i className="ri-user-settings-line"></i> Account Settings</a>
              <a href={route('logout')}><i className="ri-logout-box-r-line"></i> Log Out</a>
            </nav>
          </div>
        </div>
      </div>
    );
}
