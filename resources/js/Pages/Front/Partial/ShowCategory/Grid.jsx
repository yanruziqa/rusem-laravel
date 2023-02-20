export default function CoursesGrid({courses}){
    const Courses = courses.map((webinar) => 
        <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="course-item-02" data-aos="fade-up" data-aos-duration="1000">
                <div className="course-header">
                    <div className="course-header__thumbnail rounded-0">
                        <a><img src="/static/images/coming_soon.jpg" alt="courses" width="330" height="221" /></a>
                    </div>
                </div>
                <div className="course-info-02">
                    <div className="course-info-02__category">
                        <a href="#">{ webinar.nama_kategori }</a>
                    </div>
                    <h3 className="course-info-02__title"><a href={'/webinar/'+webinar.id_webinar}>{ webinar.judul }</a></h3>
                    <div className="course-info-02__description">
                        <p>oleh <strong>{ webinar.pembicara }</strong></p>
                    </div>
                    <div className="course-info-02__price">
                        <span className="sale-price"><small className="separator">{ webinar.hari }</small> { webinar.bulan }
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
    return (
        <div className="row gy-6">
            {Courses}
        </div>
    );
}