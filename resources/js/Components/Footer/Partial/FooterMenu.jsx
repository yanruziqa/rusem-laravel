export default function FooterMenu(){
    return (
        <div className="row gy-6">
            <div className="col-sm-4">
                <div className="footer-widget">
                    <h4 className="footer-widget__title">About</h4>
                    <ul className="footer-widget__link">
                        <li>
                            <a>About Us</a>
                        </li>
                        <li>
                            <a>Webinar</a>
                        </li>
                        <li>
                            <a>Pemateri</a>
                        </li>
                        <li>
                            <a>Kegiatan</a>
                        </li>
                        <li>
                            <a>Event Organizer</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="footer-widget">
                    <h4 className="footer-widget__title">Links</h4>
                    <ul className="footer-widget__link">
                        <li>
                            <a>News & Blogs</a>
                        </li>
                        <li>
                            <a>Library</a>
                        </li>
                        <li>
                            <a>Gallery</a>
                        </li>
                        <li>
                            <a>Partners</a>
                        </li>
                        <li>
                            <a>Career</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="footer-widget">
                    <h4 className="footer-widget__title">Support</h4>
                    <ul className="footer-widget__link">
                        <li>
                            <a>Documentation</a>
                        </li>
                        <li>
                            <a>FAQs</a>
                        </li>
                        <li>
                            <a>Forum</a>
                        </li>
                        <li>
                            <a>Sitemap</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}