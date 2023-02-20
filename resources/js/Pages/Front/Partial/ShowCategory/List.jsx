export default function CoursesList({courses}){
    return courses.map((webinar) => 
        <div className="course-list-item">
            <div className="course-list-header">
                <div className="course-list-header__thumbnail ">
                    <a href=""><img src="/static/images/coming_soon.jpg" alt="courses" width="270" height="181" /></a>
                </div>
            </div>
            <div className="course-list-info">
                <h3 className="course-list-info__title"><a href={'/webinar/'+webinar.id_webinar}>{ webinar.judul }</a></h3>
                <div className="course-list-info__description">
                    <p>oleh <strong>{ webinar.pembicara }</strong></p>
                </div>
                <div className="course-list-info__action">
                    <button className="btn btn-primary btn-hover-secondary">Gabung</button>
                </div>
                {/* <div className="course-list-info__footer">
                    <div className="course-list-info__price">
                        <span className="sale-price"><small className="separator">{ webinar.hari }</small> { webinar.bulan }
                        </span>
                    </div>
                </div> */}
            </div>
        </div>
    );
}