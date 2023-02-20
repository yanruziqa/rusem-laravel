export default function Banner({children}){
    return (
        <div className="page-banner">
            <div className="page-banner__wrapper">
                <div className="container">
                    {children}
                </div>
            </div>
        </div>
    );
}