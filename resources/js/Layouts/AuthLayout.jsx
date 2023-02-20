export default function AuthLayout({ children }) {
    return (
        <div className="row g-0">
            <div className="col-md-7 col-lg-5 col-xl-4 col-wrapper">
                <div className="card card-sign">
                    {children}
                </div>
            </div>
            <div className="col d-none d-lg-block"><img src="/assets/img/bg1.jpg" className="auth-img" alt="" /></div>
        </div>
    );
}
