export default function Card({title, children}){
    return (
        <div className="card card-one">
            <div className="card-header">
              <h6 className="card-title">{title}</h6>
            </div>
            <div className="card-body">
                {children}
            </div>
        </div>
    );
}