import FooterCopyright from "./Partial/FooterCopyright";
import FooterMenu from "./Partial/FooterMenu";
import FooterWidget from "./Partial/FooterWidget";

export default function Footer({ className }) {
    return (
        <div className="footer-section">
            <div className="footer-widget-area section-padding-01">
                <div className="container">
                    <div className="row gy-6">
                        <div className="col-lg-4">
                            <FooterWidget />
                        </div>
                        <div className="col-lg-8">
                            <FooterMenu />
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <FooterCopyright />
            </div>
        </div>
    );
}