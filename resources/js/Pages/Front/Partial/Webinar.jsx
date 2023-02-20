export default function Webinar({webinars, categories}){
    const webinarList = webinars.map((webinar) => 
        <div className="col-xl col-lg-3 col-md-4 col-sm-6">
            <div className="course-item" data-aos="fade-up" data-aos-duration="1000">
                <div className="course-header">
                    <div className="course-header__thumbnail ">
                        <a href="#">
                            <img src="static/images/coming_soon.jpg" alt="courses" width="258" height="173" />
                        </a>
                    </div>
                </div>
                <div className="course-info">
                    <span className="course-info__badge-text badge-all">{ webinar.nama_kategori }</span>
                    <h3 className="course-info__title">
                        <a href={"webinar/"+webinar.id_webinar}>{ webinar.judul }</a>
                    </h3>
                    <a href="#" className="course-info__instructor">{webinar.pembicara}</a>
                    <div className="course-info__price">
                        <span className="sale-price"><small className="separator">{webinar.hari}</small> {webinar.bulan}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );

    function ListWebinarCategory(props){
        webinars = props.listWebinar[props.categoryName];
        return (webinars.map((webinar) => 
            <div className="col-xl col-lg-3 col-md-4 col-sm-6">
                <div className="course-item" data-aos="fade-up" data-aos-duration="1000">
                    <div className="course-header">
                        <div className="course-header__thumbnail ">
                            <a href="#">
                                <img src="static/images/coming_soon.jpg" alt="courses" width="258" height="173" />
                            </a>
                        </div>
                    </div>
                    <div className="course-info">
                        <span className="course-info__badge-text badge-all">{ webinar.nama_kategori }</span>
                        <h3 className="course-info__title">
                            <a href="{{ @base }}webinar/{{ @webinar.id_webinar }}">{ webinar.judul }</a>
                        </h3>
                        <a href="#" className="course-info__instructor">{ webinar.pembicara }</a>
                        <div className="course-info__price">
                            <span className="sale-price"><small className="separator">{ webinar.hari }</small> { webinar.bulan }
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            ));
    }

    function WebinarByCategory(props){
        return(Object.keys(props.categories).map((category) => 
            <div className="tab-pane fade"  id={"tab-"+ category}>
                <div className="row row-cols-xl-5 g-6">
                    <ListWebinarCategory listWebinar={props.categories} categoryName={category} />
                </div>
            </div>
        ));
    }

    function ListWebinarCategoryTab(props){
        return(Object.keys(props.categories).map((category) => 
            <li>
                <button data-bs-toggle="tab" data-bs-target={"#tab-"+category }>{category}</button>
            </li>
        ));
    }
    return (
        <div className="courses-section section-padding-02">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-title" data-aos="fade-up" data-aos-duration="1000">
                            <h2 className="section-title__title">Upcoming <mark>Webinar</mark>
                            </h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="courses-tab-menu" data-aos="fade-up" data-aos-duration="1000">
                            <ul className="nav justify-content-lg-end">
                                <li>
                                    <button className="active" data-bs-toggle="tab" data-bs-target="#tab1">All</button>
                                </li>
                                <ListWebinarCategoryTab categories={categories} />
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="tab1">
                        <div className="row row-cols-xl-5 g-6">
                            {webinarList}
                        </div>
                    </div>
                    <WebinarByCategory categories={categories} />
                </div>
            </div>
        </div>
    );
}