export default function FooterCopyright(){
    return (
        <div className="container">
            <div className="copyright-wrapper text-center">
                <ul className="footer-widget__link flex-row gap-8 justify-content-center">
                    <li>
                        <a>Terms of Use</a>
                    </li>
                    <li>
                        <a>Privacy Policy</a>
                    </li>
                </ul>
                <p className="footer-widget__copyright mt-0">&copy; 2022 <span> Ruang Seminar </span> Made with <i className="fa fa-heart"></i> by <a href="">mestisukses</a>
                </p>
            </div>
        </div>
    );
}