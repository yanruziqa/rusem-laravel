export default function FooterWidget(){
    return (
        <div className="footer-widget">
            <a href="course-single-layout-03.html#" className="footer-widget__logo">
                <img src="/static/images/dark-logo.png" alt="Logo" width="150" height="32" />
            </a>
            <div className="footer-widget__info">
                <span className="title">Hubungi Kami</span>
                <span className="number">03199724509</span>
                <span className="number">+62 857 3093 3858 (WA)</span>
            </div>
            <div className="footer-widget__info">
                <p>Jalan Al-Amin 3 Suko, Sidoarjo, Jawa Timur</p>
                <p>PT Sarijan International Digital School and Training Indonesia</p>
                <p>office@ruangseminar.id</p>
            </div>
            <div className="footer-widget__social-02">
                <a className="twitter" href="http://twitter.com/RuangSeminar" target="_blank">
                    <i className="fab fa-twitter"></i>
                </a>
                <a className="facebook" href="http://facebook.com/RuangSeminarindo" target="_blank">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a className="youtube" href="http://youtube.com/c/ruangseminartv" target="_blank">
                    <i className="fab fa-youtube"></i>
                </a>
                <a className="linkedin" href="http://linkedin.com/showcase/ruangseminar" target="_blank">
                    <i className="fab fa-linkedin-in"></i>
                </a>
            </div>
        </div>
    );
}