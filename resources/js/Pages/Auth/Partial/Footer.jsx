export default function AuthFooter(props) {
    return (
        <div className="card-footer">
            {props.WelcomeText} <a href={props.LinkRoute}>{props.LinkText}</a>
        </div>
    );
}
