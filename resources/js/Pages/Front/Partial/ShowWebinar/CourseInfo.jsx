export default function CourseInfo({courseInfo}){
    return (
        <div className="tutor-course-top-info section-padding-01">
            <div className="container custom-container">
                <div className="row gy-10 align-items-center flex-row-reverse">
                    <div className="col-md-5">
                        <div className="tutor-course-top-info__video">
                            <div className="ratio ratio-16x9">
                                <img src="/static/images/coming_soon.jpg" alt="Instructor" width="36" height="36" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="tutor-course-top-info__content">
                            <div className="tutor-course-top-info__badges">
                                <a className="badges-category" href="#">{ courseInfo.nama_kategori }</a>
                            </div>
                            <h1 className="tutor-course-top-info__title">{ courseInfo.judul }</h1>
                            <div className="tutor-course-top-info__meta">
                                <div className="tutor-course-top-info__meta-instructor">
                                    <div className="instructor-avatar">
                                        <img src="/static/images/instructor/instructor-01.jpg" alt="Instructor" width="36" height="36" />
                                    </div>
                                    <div className="instructor-name">
                                        { courseInfo.pembicara }
                                    </div>
                                </div>
                            </div>
                            <div className="tutor-course-top-info__meta">
                                <div className="tutor-course-top-info__meta-action">
                                    <i className="meta-icon far fa-user-alt"></i> 110 sudah bergabung
                                </div>
                            </div>
                            <div className="tutor-course-top-info__btn">
                                <button className="btn btn-primary btn-hover-secondary">
                                    <i className="far fa-shopping-cart"></i> Gabung </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}