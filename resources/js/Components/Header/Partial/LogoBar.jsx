export default function LogoBar({ children }) {
    return (
        <div className="header-logo">
            <a className="header-logo__logo" href="#">
                <img src="/static/images/dark-logo.png" width="296" height="64" alt="Logo" />
            </a>
        </div>
    );
}
