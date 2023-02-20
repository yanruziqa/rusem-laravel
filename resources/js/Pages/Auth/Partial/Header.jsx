export default function AuthHeader(props) {
    return (
        <div className="card-header">
            <a href="/" className="header-logo mb-5">ruangseminar</a>
            <h3 className="card-title">{props.header}</h3>
            <p className="card-text">Selamat Datang!</p>
        </div>
    );
}
