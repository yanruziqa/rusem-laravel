export default function Breadcrumb({location}) {

    function BreadcrumbItem(props){
        return Object.keys(props.location).map((linkText) => (
            <li className="breadcrumb-item">
                <a href={props.location[linkText]}>{linkText}</a>
            </li>
        ));
    }
    return (
        <div className="page-breadcrumb">
            <ul className="breadcrumb">
                <BreadcrumbItem location={location} />
            </ul>
        </div>
    );
}
